import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { IArtefact } from '../../lib/Interfaces';
import { ListViewStyles } from '../../lib/Styles';

interface Props {
    artefact: IArtefact
}

const ArtefactListView = ({ artefact }: Props) => {

    return (

        <View style={ListViewStyles.listItem}>
            <Card containerStyle={ListViewStyles.containerStyle} wrapperStyle={ListViewStyles.wrapperStyle}>
                <Card.Title style={ListViewStyles.text}>{artefact.Name}</Card.Title>
                <Text style={ListViewStyles.text}>{artefact.Description}</Text>
                <Card.Divider />
                <Card.Image style={ListViewStyles.image} source={{
                    uri: artefact.URI,
                }}/>

            </Card>

        </View>
    )
}

export default ArtefactListView;


