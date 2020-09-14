/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  View,
  Text,
} from 'react-native';

import ArtefactsScreen from './components/ArtefactsScreen';
import HomeScreen from './components/HomeScreen';
import { ArtefactStack } from './components/ArtefactStack';
import { ArtefactsContext } from './components/ArtefactsContext';




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
  const [artefacts, setArtefacts] = useState<IB>()
  return (
    <NavigationContainer>
      <ArtefactsContext.Provider value ={}>
        <Tabs />
      </ArtefactsContext.Provider>
    </NavigationContainer>
  );
}
