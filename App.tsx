/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useMemo, useEffect, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  View,
  Text,
  PermissionsAndroid,
} from 'react-native';


import HomeScreen from './components/HomeScreen';
import { ArtefactStack } from './components/ArtefactStack';
import ArtefactsContext, { artefactsContextValue } from './components/ArtefactsContext';
import { IArtefact, IBaseArtefact } from './lib/Interfaces';
import { artefactsURL } from './lib/urls';

import { BleManager } from 'react-native-ble-plx';

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


class EventsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events!</Text>
      </View>
    )
  }
}

class StoreScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Store!</Text>
      </View>
    )
  }
}



const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Artefacts" component={ArtefactStack} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />

    </Tab.Navigator>
  );
}


export default function App() {
  const [artefacts, setArtefacts] = useState<IArtefact[]>([]);

  const manager = useRef<BleManager | null>(null);

  async function getArtefacts(): Promise<IArtefact[]> {
    let json;
    try {
      const result = await fetch(artefactsURL);
      json = await result.json();

    } catch (error) {
      console.error("ERROR RETREIVING ARTEFACTS");
    }
    return json;
  }

  const loadArtefacts = async () => {
    setArtefacts(await getArtefacts());
  }

  const scanAndConnect = () => {
    manager.current?.startDeviceScan(null, null, (error, device) => {
      console.log({ device });
    });
  }

  useEffect(() => {
    loadArtefacts();

    requestLocationPermission()
      .then(() => {
        manager.current = new BleManager();
        manager.current?.startDeviceScan(null, null, (error, device) => {
          console.log({ device });
        });

        // const subscription = manager.current.onStateChange((state => {
        //   console.log("BLE Manager online");
        //   if (state === 'PoweredOn') {
        //     console.log("Starting scanning");
        //     scanAndConnect();
        //     subscription.remove();
        //   }
        // }));
      })
    return () => {
      // manager.current?.stopDeviceScan();
      // manager.current?.destroy();
    }

  }, []);

  const providerValue = useMemo(() => ({ artefacts, loadArtefacts }), [artefacts, loadArtefacts]); //Only recomputes as object when logintoken or setLogintoken change
  return (

    <NavigationContainer>
      <ArtefactsContext.Provider value={providerValue}>
        <Tabs />
      </ArtefactsContext.Provider>
    </NavigationContainer>
  );
}
