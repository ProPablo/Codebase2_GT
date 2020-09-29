import { HomeStackParams } from './HomeStack';

import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { BottomSheet, Card, Header, ListItem } from 'react-native-elements';
import Video from 'react-native-video';


type NavigationProp = StackNavigationProp<HomeStackParams>


interface Props {
    navigation: NavigationProp
}

const TourScreen: React.FC<Props> = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    return (
        <>
            <Header title="BottomSheet" />
            <Button title="Open POGGUM Sheet" onPress={() => setIsVisible(true)} />
            <BottomSheet isVisible={isVisible}>
                <View>
                    <Video source={{ uri: "background" }}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} />
                </View>
            </BottomSheet>
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
