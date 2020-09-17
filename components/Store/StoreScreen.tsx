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
import { ScreenStyles } from '../../lib/Styles';


type NavigationProp = StackNavigationProp<StoreStackParams>

// Refactor to create own Searchable List component

interface Props {
  navigation: NavigationProp
}

const StoreScreen: React.FC<Props> = ({ navigation }) => {

  const [searchTerm, setsearchTerm] = useState("");
  const [searchAttribute, setsearchAttribute] = useState("");
  const [ignoreCase, setignoreCase] = useState(true);
  const { storeItems } = useContext(StoreContext);
  const [filtered, setfiltered] = useState(storeItems);

  

  function actionOnRow(item: number) {
    navigation.navigate("StoreDetailScreen", {
      storeId: item
    })
  };

  function filterData() {
    console.log("Filteering data");
    const reg = RegExp(searchTerm, 'gi' );
    setfiltered(storeItems?.filter((item)=> (item.Name + item.Description + item.Cost).match(reg)));
  }

  useEffect(()=> {
    filterData();
  }, [storeItems, searchTerm]);

  return (
    <View style={{ flex: 1 }}>
      <View style={ScreenStyles.pageContainer}>
        <View style={ScreenStyles.searchInputs}>
          <TextInput
            style={ScreenStyles.search}
            placeholder={ "Search Merchandise"}
            onChangeText={searchTerm => setsearchTerm(searchTerm)}
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

export default StoreScreen;