import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
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
import { HomeStack } from './components/Home/HomeStack';
import StoreContext from './components/Store/StoreContext';
import { StoreStack } from './components/Store/StoreStack';
import { getArtefacts, getEvents, getStore, processArtefact, processEvent } from './lib/Controllers';
import { IArtefact, IBaseArtefact, IBaseExhibition, IBaseStoreItem, IBaseStoreItemImage, IExhibition } from './lib/Interfaces';
import Icon from 'react-native-vector-icons/FontAwesome';


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
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: "home",
          Artefacts: "bank",
          Events: "info-circle",
          Store: "shopping-cart"
        }

        const sizes = {
          Home: 25,
          Artefacts: 20,
          Events: 25,
          Store: 25,
        }

        return (
          <Icon name={icons[route.name]} size={sizes[route.name]} color={color} />
        );
      },
    })}
      tabBarOptions={{
        activeTintColor: "#A20C02",
      }}>
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Artefacts" component={ArtefactStack}/>
      <Tab.Screen name="Events" component={EventStack}/>
      <Tab.Screen name="Store" component={StoreStack}/>

    </Tab.Navigator>
  );
}


// options={{
//   tabBarIcon: ({ }) => (
//     <Icon name="shopping-cart" size={30} />
//   )
// }} 

export default function App() {
  const [artefacts, setArtefacts] = useState<IArtefact[]>([]);
  const [events, setEvents] = useState<IExhibition[]>([]);
  const [storeItems, setStore] = useState<IBaseStoreItem[]>([]);
  const [storeImages, setStoreImages] = useState<IBaseStoreItemImage[]>([]);

  const manager = useRef<BleManager | null>(null);

  const loadArtefacts = async () => {
    const baseArtefacts: IBaseArtefact[] = await getArtefacts();
    const artefacts: IArtefact[] = [];
    baseArtefacts.forEach((baseArtefact) => {
      artefacts.push(processArtefact(baseArtefact));
    })
    setArtefacts(artefacts);
  }

  const loadEvents = async () => {
    const baseEvents: IBaseExhibition[] = await getEvents();
    const events: IExhibition[] = [];
    baseEvents.forEach((baseEvents) => {
      events.push(processEvent(baseEvents));
    })
    setEvents(events);
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
    //TODO create Hook for BT updates
    // requestLocationPermission()
    //   .then(() => {
    //     manager.current = new BleManager();
    //     manager.current?.startDeviceScan(null, null, (error, device) => {
    //       console.log({ device });
    //     });

    //     const subscription = manager.current.onStateChange((state => {
    //       console.log("BLE Manager online");
    //       if (state === 'PoweredOn') {
    //         // console.log("Starting scanning");
    //         scanAndConnect();
    //         subscription.remove();
    //       }
    //     }));
    //   })
    // return () => {
    //   // manager.current?.stopDeviceScan();
    //   // manager.current?.destroy();
    // }

  }, []);

  const artefactsProviderValue = useMemo(() => ({ artefacts, loadArtefacts }), [artefacts, loadArtefacts]); //Only recomputes as object when logintoken or setLogintoken change
  return (

    <NavigationContainer theme={NavigationTheme}>
      <ArtefactsContext.Provider value={artefactsProviderValue}>
        <EventContext.Provider value={events}>
          <StoreContext.Provider value={{ storeImages, storeItems }}>
            <Tabs />
          </StoreContext.Provider>
        </EventContext.Provider>
      </ArtefactsContext.Provider>
    </NavigationContainer>
  );

}

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#A20C02',
    card: '#F2E3A6',
    text: '#000'
  },
};
