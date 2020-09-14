import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Artefact } from '../lib/Interfaces';

interface Props {
    artefact: Artefact
}

const ArtefactListView = ({artefact}: Props) => {
    
    return (
        <View>
            <Text>{artefact.Name}</Text>
            <Text>{artefact.Description}</Text>
        </View>
    )
}

export default ArtefactListView;

const styles = StyleSheet.create({})
