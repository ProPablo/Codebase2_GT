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
import { StoreStackParams } from './StoreStack';
import { IBaseStoreItem, IBaseStoreItemImage } from '../../lib/Interfaces';
import { storeURL } from '../../lib/urls';
import StoreListView from './StoreListView';
import StoreContext, { storeContextValue } from './StoreContext';
import { Card, Icon } from 'react-native-elements';


type NavigationProp = StackNavigationProp<StoreStackParams>

// Refactor to create own Searchable List component

interface Props {
  navigation: NavigationProp
}

const StoreScreen: React.FC<Props> = ({ navigation }) => {

  const [searchTerm, setsearchTerm] = useState("");
  const [searchAttribute, setsearchAttribute] = useState("");
  const [ignoreCase, setignoreCase] = useState(true);
  // const [filtered, setfiltered] = useState(data);

  const { storeItems } = useContext(StoreContext);

  function actionOnRow(item: number) {
    navigation.navigate("StoreDetailScreen", {
      storeId: item
    })
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <View style={styles.searchInputs}>
          <TextInput
            style={styles.search}
            placeholder={
              ignoreCase
                ? "Search Merchandise (case insensitive)"
                : "Search Merchandise"
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
          data={storeItems}
          renderItem={({ item }) => (
            <Pressable onPress={() => actionOnRow(item.Id)}>
              <StoreListView store={item} />
              {/* <Text style={styles.listItem}>{item.Name}</Text> */}
            </Pressable>
          )}
          keyExtractor={(item) => item.Id.toString()}
        ></FlatList>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: '#f5f0f6ff',
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

export default StoreScreen;