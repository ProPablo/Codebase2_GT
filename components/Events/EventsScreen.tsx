import React, { useState, useEffect, useContext } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
//import { SearchableFlatList } from "react-native-searchable-list";

import {
  ScrollView,
  TextInput,
  Switch,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet, Pressable, Button
} from 'react-native';
import { EventStackParams } from './EventStack';
import { IBaseExhibition } from '../../lib/Interfaces';
import { eventsURL } from '../../lib/urls';
import EventListView from './EventListView';
import EventContext from './EventContext';
import { Card, Icon } from 'react-native-elements';


type NavigationProp = StackNavigationProp<EventStackParams>

// Refactor to create own Searchable List component

interface Props {
  navigation: NavigationProp
}

const EventsScreen: React.FC<Props> = ({ navigation }) => {

  const [searchTerm, setsearchTerm] = useState("");
  const [searchAttribute, setsearchAttribute] = useState("");
  const [ignoreCase, setignoreCase] = useState(true);
  const events = useContext(EventContext);
  const [filtered, setfiltered] = useState(events);


  function actionOnRow(item: number) {
    navigation.navigate("EventDetailScreen", {
      eventId: item
    })
  };

  function filterData() {
    console.log("Filteering data");
    const reg = RegExp(searchTerm, 'gi' );
    setfiltered(events?.filter((item)=> (item.Name + item.Organiser + item.Description).match(reg)));
  }

  useEffect(()=> {
    filterData();
  }, [events, searchTerm]);


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <View style={styles.searchInputs}>
          <TextInput
            style={styles.search}
            placeholder={ "Search Events" }
            onChangeText={searchTerm => setsearchTerm(searchTerm)}
          />
        </View>

        <FlatList
          data={filtered}
          renderItem={({ item }) => (
            <Pressable onPress={() => actionOnRow(item.Id)}>
              <EventListView exhibition={item} />
              {/* <Text style={styles.listItem}>{item.Name}</Text> */}
            </Pressable>
          )}
          keyExtractor={(item) => item.Id.toString()}
        ></FlatList>


      </View>
    </View>
  );
}


export default EventsScreen;

const styles = StyleSheet.create({
  pageContainer: {
      padding: 10,
      flex: 1,
      backgroundColor: '#F7EECA',
  },
  searchInputs: {
      flexDirection: "row"
  },
  search: {
      flex: 8,
      marginBottom: 20,
      borderColor: "#ffa616",
      borderBottomWidth: 3,
      padding: 10
  },
  switch: {
      flex: 2
  },
  info: {
      padding: 10,
      marginTop: 20,
      borderColor: "#f4cfce",
      borderWidth: 1
  },
  row: {
      flexDirection: "row",
      backgroundColor: "#f4cfce"
  },
  row1: {
      flexDirection: "row"
  },
  prop: {
      flex: 1,
      padding: 10
  },
  val: {
      alignSelf: "center",
      flex: 1
  }
});