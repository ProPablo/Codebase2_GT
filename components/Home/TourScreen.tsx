import { HomeStackParams } from './HomeStack';

import React, { useState, useRef } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
    View,
    Text,
    StyleSheet,
    Button, Image
} from 'react-native';
import Video from 'react-native-video';
import VideoComponent from './VideoComponent';
import BottomSheet from 'reanimated-bottom-sheet';
import Transform from './Transform';


type NavigationProp = StackNavigationProp<HomeStackParams>


interface Props {
    navigation: NavigationProp
}

const TourScreen: React.FC<Props> = ({ navigation }) => {

    const renderContent = () => (
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 450,
          }}
        >
          <VideoComponent/>
        </View>
      );

    const sheetRef = useRef(null);
    return (
        <View style={styles.containerStyle}>
            <Button title="Open POGGUM Sheet" onPress={() => sheetRef.current?.snapTo(0)} />
            <Transform><Image source={require('../../static/floorplan.jpg')}/></Transform>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 300, 0]}
                borderRadius={10}
                renderContent={renderContent}
            />
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    wrapperStyle: {

    }
});

export default TourScreen;
