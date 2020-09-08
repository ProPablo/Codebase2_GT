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
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchableFlatList } from "react-native-searchable-list";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  View,
  Text,
  StatusBar,
} from 'react-native';

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

const Tab = createBottomTabNavigator();

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

// React.useEffect(() => {
//   const loadArtefactList = navigation.addListener('focus', (e) => {
//     // TODO: gonna be used for loading up the artefact list
//     alert('Loading lists...');
//   });
//   return loadArtefactList;
// }, [navigation]);

class ArtefactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "Artefact 1",
        "Artefact 2",
        "Artefact 3",
        "Artefact 4",
        "POGCHAMP",
        "GAMER",
        "weirdchamp"
      ],
      searchTerm: "",
      searchAttribute: "",
      ignoreCase: true
    };
  }

  render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
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
                onChangeText={searchTerm => this.setState({ searchTerm })}
              />
              <Switch
                style={styles.switch}
                value={ignoreCase}
                tintColor={"#D44744"}
                thumbTintColor={"#D44744"}
                onTintColor={"#f4cfce"}
                onValueChange={ignoreCase => {
                  this.setState({ ignoreCase });
                }}
              />
            </View>
            <SearchableFlatList
              style={styles.list}
              data={data}
              searchTerm={searchTerm}
              ignoreCase={ignoreCase}
              renderItem={({ item }) => (
                <Text style={styles.listItem}>{item}</Text>
              )}
              keyExtractor={item => item}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

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

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Artefacts" component={ArtefactsScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />

    </Tab.Navigator>
  );
}

const TabNavigator = createBottomTabNavigator()

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
