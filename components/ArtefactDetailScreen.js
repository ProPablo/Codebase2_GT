import React from 'react'
import { TextComponent } from 'react-native';

export default function ArtefactDetailScreen({ route, navigation }) {

    const { Id } = route.params;


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Artefact Details!</Text>
            <Text>This is id: {Id}</Text>
        </View>
    )
}