import { HomeStackParams } from './HomeStack';

import React, { useState, useRef } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
    View,
    Text,
    StyleSheet,
    Button, 
    Image,
} from 'react-native';
import { Card, Header, ListItem } from 'react-native-elements';
import Video from 'react-native-video';
import VideoComponent from './VideoComponent';
import { baseURL } from '../../lib/urls';
import BottomSheet from 'reanimated-bottom-sheet';



type NavigationProp = StackNavigationProp<HomeStackParams>


interface Props {
    navigation: NavigationProp
}

const TourScreen: React.FC<Props> = ({ navigation }) => {
    const images = [{
        url: '',
        props: {
            // Or you can set source directory.
            source: require('./floorplan.jpg')
        }
    }]

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 450,
            }}
        >
            <VideoComponent />
        </View>
    );

    const video = useRef<Video>(null);

    const sheetRef = useRef(null);
    return (
        <>
            <Button title="Open POGGUM Sheet" onPress={() => sheetRef.current?.snapTo(0)} />
            <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 300, 0]}
                borderRadius={10}
                renderContent={renderContent}
            />
        </>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 2,
        margin: 2,
    },

    image: {
    },
    backgroundVideo: {

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

export default TourScreen;
