import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { IBaseExhibition } from '../lib/Interfaces';

interface Props {
    exhibition: IBaseExhibition
}

const ExhibitionListView = ({ exhibition }: Props) => {

    return (

        <View style={styles.listItem}>
            <Card containerStyle={styles.containerStyle} wrapperStyle={styles.wrapperStyle}>
                <Card.Title style={styles.text}>{exhibition.Name}</Card.Title>
                <Text style={styles.text}>{exhibition.Description}</Text>
                <Card.Divider />

            </Card>

        </View>
    )
}

export default ExhibitionListView;

const styles = StyleSheet.create({
    listItem: {
        padding: 2,
        margin: 2,

    },
    
    image: {

    },

    text: {
        color:'#000',
        textAlign:'center',
        fontFamily:'Roboto'
    },

    containerStyle: {
        borderRadius: 10,
        backgroundColor: '#C0D6DF',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 4,
    },

    wrapperStyle: {

    }
});
