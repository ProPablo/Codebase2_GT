/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useMemo, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  View,
  Text,
  NativeModules
} from 'react-native';


import ArtefactsScreen from './components/Artefacts/ArtefactsScreen';
import HomeScreen from './components/HomeScreen';
import { ArtefactStack } from './components/Artefacts/ArtefactStack';
import ArtefactsContext, { artefactsContextValue } from './components/Artefacts/ArtefactsContext';
import { IArtefact, IBaseArtefact } from './lib/Interfaces';
import { artefactsURL } from './lib/urls';




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

  useEffect(() => {
    loadArtefacts();
    console.log("Logging artefacts", artefacts);
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
