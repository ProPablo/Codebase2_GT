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
} from 'react-native';

import styles from './styles';

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