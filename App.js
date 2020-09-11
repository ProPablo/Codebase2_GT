/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
} from 'react-native';

import ArtefactsScreen from './components/ArtefactsScreen.js';
import HomeScreen from './components/HomeScreen.js';
import ArtefactDetailsScreen from "./components/ArtefactDetailScreen.js";

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



const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Artefacts" component={ArtefactsScreen} />
      <Tabs.Screen name="Events" component={EventsScreen} />
      <Tabs.Screen name="Store" component={StoreScreen} />

    </Tabs.Navigator>
  );
}

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Redland Museum" component={Home} />
      <Stack.Screen name="ArtefactDetails" component={ArtefactDetailsScreen}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  );
}
