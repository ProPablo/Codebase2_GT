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
import { IArtefact, IBaseArtefact, IBaseStoreItem, IBaseStoreItemImage } from './lib/Interfaces';
import { artefactsURL, storeURL } from './lib/urls';

import { EventStack } from './components/Events/EventStack';
import EventContext from './components/Events/EventContext';
import { IBaseExhibition } from './lib/Interfaces';
import { eventsURL } from './lib/urls';
import { StoreStack } from './components/Store/StoreStack';
import StoreContext from './components/Store/StoreContext';

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

  async function getEvents(): Promise<IBaseExhibition[]> {
    let json;
    try {
      const result = await fetch(eventsURL);
      json = await result.json();
      console.log(json);

    } catch (error) {
      console.error("ERROR RETREIVING EVENTS");
    }

    return json;
  }

  async function getStore(): Promise<IBaseStoreItem[]> {
    let json;
    try {
      const result = await fetch(storeURL);
      json = await result.json();

    } catch (error) {
      console.error("ERROR RETREIVING STORE ITEMS");
    }

    return json;
  }

  const loadArtefacts = async () => {
    setArtefacts(await getArtefacts());
  }

  const loadEvents = async () => {
    setEvents(await getEvents());
  }

  const loadStore = async () => {
    setStore(await getStore());
  }


  useEffect(() => {
    loadArtefacts();
    loadEvents();
    loadStore();
  }, []);

  const providerValue = useMemo(() => ({ artefacts, loadArtefacts }), [artefacts, loadArtefacts]); //Only recomputes as object when logintoken or setLogintoken change
  return (

    <NavigationContainer>
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
