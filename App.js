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
import { createStackNavigator } from '@react-navigation/stack';
import { SearchableFlatList } from "react-native-searchable-list";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import HomeScreen from './components/HomeScreen';


// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     )
//   }
// }


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
  actionOnRow(item) {
    console.log("POGCHAMP" + item)
  };

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
                <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
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

class ArtefactDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Artefact Details!</Text>
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
