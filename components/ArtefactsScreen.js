import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchableFlatList } from "react-native-searchable-list";

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
                  <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate(item)}>
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