import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { HomeStackParams } from './HomeStack';


type NavigationProp = StackNavigationProp<HomeStackParams>


interface Props {
    navigation: NavigationProp
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    function actionOnPress() {
        navigation.navigate("TourScreen");
    };

    function tourActionOnPress() {
        navigation.navigate("TourScreen");
    }

    return (
        <>
            <View style={styles.pageContainer}>
                <Image
                    source={{ uri: 'https://scontent.fbne6-1.fna.fbcdn.net/v/t31.0-8/12132639_1621472404741790_4024952992087543132_o.jpg?_nc_cat=105&_nc_sid=e3f864&_nc_ohc=FaGvP6Mx5WgAX-1-LPx&_nc_ht=scontent.fbne6-1.fna&oh=e3b3d3cd969a47629b7b3f0c2e748278&oe=5F99ACA7' }}
                    style={styles.image} />
                <Card containerStyle={styles.eventContainerStyle} wrapperStyle={styles.wrapperStyle}>
                    <Card.Title style={styles.text}>{"EVENT_NAME"}</Card.Title>
                    <Text style={styles.text}>{"EVENT_DESCRIPTION"}</Text>
                    <Button title="Learn More" onPress={actionOnPress} color="#A20C02" />

                </Card>
                <Pressable onPress={tourActionOnPress}>
                    <Card containerStyle={styles.tourContainerStyle} wrapperStyle={styles.wrapperStyle}>
                        <Card.Title style={styles.text}>{"Start Tour"}</Card.Title>
                    </Card>
                </Pressable>

            </View>
        </>
    );
}


const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    pageContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#F7EECA',
    },
    listItem: {
        padding: 2,
        margin: 2,
    },

    image: {
        width: Math.round(dimensions.width * 15 / 16),
        height: 200,
    },

    text: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },

    eventContainerStyle: {
        borderRadius: 10,
        backgroundColor: '#A20C02',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 4,
    },
    tourContainerStyle: {
        borderRadius: 10,
        backgroundColor: '#27d85c',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 4,
    },

    wrapperStyle: {

    }
});

export default HomeScreen;
