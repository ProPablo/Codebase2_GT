import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchableFlatList } from "react-native-searchable-list";

import {
  ScrollView,
  TextInput,
  Switch,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';


const initialData = [
  "Artefact 1",
  "Artefact 2",
  "Artefact 3",
  "Artefact 4",
  "POGCHAMP",
  "GAMER",
  "weirdchamp"
];
export default function ArtefactsScreen(props) {
  const {navigation } = props;
  const [searchTerm, setsearchTerm] = useState("");
  const [searchAttribute, setsearchAttribute] = useState("");
  const [ignoreCase, setignoreCase] = useState(true);
  const [data, setData] = useState(initialData);

  function actionOnRow(item) {
    console.log("POGCHAMP" + item);
    navigation.navigate("ArtefactDetails", {
      Id: item
    })
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <ScrollView>
          <View style={styles.searchInputs}>
            <TextInput
              style={styles.search}
              placeholder={
                ignoreCase
                  ? "Search Artefacts"
                  : "Search Wonders Case Sensitively"
              }
              onChangeText={searchTerm => setsearchAttribute(searchTerm)}
            />
            <Switch
              style={styles.switch}
              value={ignoreCase}
              tintColor={"#D44744"}
              thumbTintColor={"#D44744"}
              onTintColor={"#f4cfce"}
              onValueChange={ignoreCase => setignoreCase(ignoreCase)}
            />
          </View>
          <SearchableFlatList
            style={styles.list}
            data={data}
            searchTerm={searchTerm}
            ignoreCase={ignoreCase}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => actionOnRow(item)}>
                <Text style={styles.listItem}>{item}</Text>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={item => item}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10,
    flex: 1
  },
  searchInputs: {
    flexDirection: "row"
  },
  search: {
    flex: 8,
    marginBottom: 20,
    borderColor: "#D44744",
    borderBottomWidth: 3,
    padding: 10
  },
  switch: {
    flex: 2
  },
  listItem: {
    padding: 10,
    borderColor: "#f4cfce",
    borderWidth: 1,
    borderRadius: 10,
    margin: 2
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