import { HomeStackParams } from './HomeStack';

import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
    View,
    Text,
    StyleSheet, Button
} from 'react-native';
import { Card } from 'react-native-elements';

type NavigationProp = StackNavigationProp<HomeStackParams>


interface Props {
    navigation: NavigationProp
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    function actionOnPress() {
        navigation.navigate("TourScreen")
    };
    return (
        <View style={{ flex: 1 }}>
            <Card containerStyle={styles.containerStyle} wrapperStyle={styles.wrapperStyle}>
                <Card.Title style={styles.text}>{"EVENT_NAME"}</Card.Title>
                <Text style={styles.text}>{"EVENT_DESCRIPTION"}</Text>
                <Button title="Learn More" onPress={actionOnPress} />
                <Card.Divider />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default HomeScreen;
