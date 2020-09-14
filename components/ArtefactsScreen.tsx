import React, { useState, useEffect } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { SearchableFlatList } from "react-native-searchable-list";

import {
  ScrollView,
  TextInput,
  Switch,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet
} from 'react-native';
import { ArtefactStackParams } from './ArtefactStack';
import { Artefact } from '../lib/Interfaces';
import { artefactsURL } from '../lib/urls';
import ArtefactListView from './ArtefactListView';


type NavigationProp = StackNavigationProp<ArtefactStackParams>

// Refactor to create own Searchable List component

const initialData = [
  "Artefact 1",
  "Artefact 2",
  "Artefact 3",
  "Artefact 4",
  "POGCHAMP",
  "GAMER",
  "weirdchamp"
];

interface Props {
  navigation: NavigationProp
}

async function getArtefacts(): Promise<Artefact[]> {
  const result = await fetch(artefactsURL);
  const json = await result.json();
  return json;
}

const ArtefactsScreen: React.FC<Props> = ({ navigation }) => {

  const [searchTerm, setsearchTerm] = useState("");
  const [searchAttribute, setsearchAttribute] = useState("");
  const [ignoreCase, setignoreCase] = useState(true);
  const [data, setData] = useState<Artefact[]>([]);

  const [filtered, setfiltered] = useState(data);

  useEffect(() => {
    (async () => setData(await getArtefacts()))();
  }, []);

  function actionOnRow(item: number) {
    console.log("POGCHAMP" + item);
    navigation.navigate("ArtefactDetails", {
      artefactId: item
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
                  ? "Search Artefacts (case insensitive)"
                  : "Search Artefacts"
              }
              onChangeText={searchTerm => setsearchTerm(searchTerm)}
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

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ArtefactListView artefact={item}/>
            )}
            keyExtractor={(item)=>item.Id.toString()}
          ></FlatList>


          {/* <SearchableFlatList
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
          /> */}
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

export default ArtefactsScreen;