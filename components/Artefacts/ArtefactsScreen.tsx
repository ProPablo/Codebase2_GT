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
import { ArtefactStackParams } from './ArtefactStack';
import { IArtefact } from '../../lib/Interfaces';
import { artefactsURL } from '../../lib/urls';
import ArtefactListView from './ArtefactListView';
import ArtefactsContext, { artefactsContextValue } from './ArtefactsContext';
import { Card, Icon } from 'react-native-elements';
import { ScreenStyles } from '../../lib/Styles';


type NavigationProp = StackNavigationProp<ArtefactStackParams>

// Refactor to create own Searchable List component

interface Props {
  navigation: NavigationProp
}

const ArtefactsScreen: React.FC<Props> = ({ navigation }) => {

  const [searchTerm, setsearchTerm] = useState("");
  // const [searchAttribute, setsearchAttribute] = useState("");
  const {artefacts, loadArtefacts} = useContext(ArtefactsContext);
  const [filtered, setfiltered] = useState(artefacts);

  function actionOnRow(item: number) {
    navigation.navigate("ArtefactDetails", {
      artefactId: item
    })
  };

  function filterData() {
    console.log("Filteering data");
    const reg = RegExp(searchTerm, 'gi' );
    setfiltered(artefacts?.filter((item)=> (item.Category + item.AdditionalComments + item.Description + item.Name).match(reg)));
  }

  useEffect(()=> {
    filterData();
  }, [artefacts, searchTerm]);

  return (
    <View style={{ flex: 1 }}>
      <View style={ScreenStyles.pageContainer}>
          <View style={ScreenStyles.searchInputs}>
            <TextInput
              style={ScreenStyles.search}
              placeholder={"Search " + artefacts?.length + " Artefacts"}
              onChangeText={searchTerm => setsearchTerm(searchTerm)}
            />
          </View>

          <FlatList
            data={filtered}
            renderItem={({ item }) => (
              <Pressable onPress={() => actionOnRow(item.Id)}>
                <ArtefactListView artefact={item}/>
                {/* <Text style={styles.listItem}>{item.Name}</Text> */}
              </Pressable>
            )}
            keyExtractor={(item)=>item.Id.toString()}
          ></FlatList>


      </View>
    </View>
  );
}



export default ArtefactsScreen;