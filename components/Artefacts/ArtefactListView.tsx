import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { globalStyle } from '../../lib/Styles';
import { IArtefact } from '../../lib/Interfaces';

interface Props {
    artefact: IArtefact
}

const ArtefactListView = ({ artefact }: Props) => {
    return (
        
        <View style={globalStyle.listItem}>
            <Card containerStyle={globalStyle.containerStyle} wrapperStyle={globalStyle.wrapperStyle}>
                <Card.Title style={globalStyle.text}>{artefact.Name}</Card.Title>
                <Text style={globalStyle.text}>{artefact.Description}</Text>
                <Card.Divider />
                <Card.Image source={{
                    uri: artefact.URI, 
                }}/>

            </Card>

        </View>
    )
}


export default ArtefactListView;
