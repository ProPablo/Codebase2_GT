import { DefaultTheme } from '@react-navigation/native';
import React from 'react'
import { StyleSheet } from 'react-native';
import { Image } from "react-native-elements"

export function ActionBarIcon() {
    return (
        <Image
            source={{ uri: 'https://www.redlandmuseum.org.au/wp-content/uploads/2012/10/redland-museum-logo-wide.png' }}
            style={{ width: 300, height: 50, marginLeft: 15 }} />
    );
}

export const NavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#A20C02',
      card: '#F2E3A6',
      text: '#000'
    },
  };

export const ScreenStyles = StyleSheet.create({
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

export const ListViewStyles = StyleSheet.create({
    listItem: {
        padding: 2,
        margin: 2,
    },

    image: {
    },

    text: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },

    containerStyle: {
        borderRadius: 10,
        backgroundColor: '#A20C02',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 4,
    },

    wrapperStyle: {

    }
});

export const DetailStyles = StyleSheet.create({
    
});