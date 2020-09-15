import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { IArtefact } from '../../lib/Interfaces';

interface Props {
    artefact: IArtefact
}

const ArtefactListView = ({ artefact }: Props) => {

    return (

        <View style={styles.listItem}>
            <Card containerStyle={styles.containerStyle} wrapperStyle={styles.wrapperStyle}>
                <Card.Title style={styles.text}>{artefact.Name}</Card.Title>
                <Text style={styles.text}>{artefact.Description}</Text>
                <Card.Divider />
                <Card.Image style={styles.image} source={{
                    uri: "data:image/jpeg;base64," + artefact.Image,
                }}>

                </Card.Image>

            </Card>

        </View>
    )
}

export default ArtefactListView;

const styles = StyleSheet.create({
    listItem: {
        padding: 2,
        margin: 2,

    },
    
    image: {
        backgroundColor:'#fff'
    },

    text: {
        color:'#fff',
        textAlign:'center',
        fontFamily:'Roboto'
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
