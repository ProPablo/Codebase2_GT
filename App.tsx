import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  PermissionsAndroid, StyleSheet
} from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import 'react-native-gesture-handler';
import ArtefactsContext from './components/Artefacts/ArtefactsContext';
import { ArtefactStack } from './components/Artefacts/ArtefactStack';
import EventContext from './components/Events/EventContext';
import { EventStack } from './components/Events/EventStack';
import HomeScreen from './components/HomeScreen';
import StoreContext from './components/Store/StoreContext';
import { StoreStack } from './components/Store/StoreStack';
import { getArtefacts, getEvents, getStore } from './lib/Controllers';
import { IArtefact, IBaseExhibition, IBaseStoreItem, IBaseStoreItemImage } from './lib/Interfaces';
import { NavigationTheme } from './lib/Styles';
import { artefactsURL } from './lib/urls';

// const allPerms = [PermissionsAndroid.PERMISSIONS.BLUETOOTH, PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADMIN, PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION];
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This example app needs to access your location in order to use bluetooth beacons.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("GOT PERMS")
      return true;
    } else {
      // permission denied
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto'
  }
});

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Artefacts" component={ArtefactStack} />
      <Tab.Screen name="Events" component={EventStack} />
      <Tab.Screen name="Store" component={StoreStack} />

    </Tab.Navigator>
  );
}



export default function App() {
  const [artefacts, setArtefacts] = useState<IArtefact[]>([]);
  const [events, setEvents] = useState<IBaseExhibition[]>([]);
  const [storeItems, setStore] = useState<IBaseStoreItem[]>([]);
  const [storeImages, setStoreImages] = useState<IBaseStoreItemImage[]>([]);

  const manager = useRef<BleManager | null>(null);

  const loadArtefacts = async () => {
    setArtefacts(await getArtefacts());
  }

  const loadEvents = async () => {
    setEvents(await getEvents());
  }

  const loadStore = async () => {
    setStore(await getStore());
  }

  const scanAndConnect = () => {
    manager.current?.startDeviceScan(null, null, (error, device) => {
      console.log({ device });
    });
  }

  useEffect(() => {
    loadArtefacts();
    loadEvents();
    loadStore();

    requestLocationPermission()
      .then(() => {
        manager.current = new BleManager();
        manager.current?.startDeviceScan(null, null, (error, device) => {
          console.log({ device });
        });

        const subscription = manager.current.onStateChange((state => {
          console.log("BLE Manager online");
          if (state === 'PoweredOn') {
            console.log("Starting scanning");
            scanAndConnect();
            subscription.remove();
          }
        }));
      })
    return () => {
      // manager.current?.stopDeviceScan();
      // manager.current?.destroy();
    }

  }, []);

  const providerValue = useMemo(() => ({ artefacts, loadArtefacts }), [artefacts, loadArtefacts]); //Only recomputes as object when logintoken or setLogintoken change
  return (

    <NavigationContainer theme={NavigationTheme}>
      <ArtefactsContext.Provider value={providerValue}>
        <EventContext.Provider value={events}>
          <StoreContext.Provider value={{ storeImages, storeItems }}>
            <Tabs />
          </StoreContext.Provider>
        </EventContext.Provider>
      </ArtefactsContext.Provider>
    </NavigationContainer>
  );

}
