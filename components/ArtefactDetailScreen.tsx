import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ArtefactStackParams } from './ArtefactStack';

type ArtefactStackRoute = RouteProp<ArtefactStackParams, 'ArtefactDetails'>

interface Props {
    route: ArtefactStackRoute
}

const ArtefactDetailScreen: React.FC<Props> = ({ route }) => {
    const [artefact, setartefact] = useState(null);
    const { artefactId } = route.params;
    useEffect(() => {
        
        (async () => {
            const apiRes = await fetch("https://api.kanye.rest");
            const json = await apiRes.json();
            setartefact(json);
        })();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Artefact Details!</Text>
            <Text>This is id: {artefactId}</Text>
            {artefact && <Text>{JSON.stringify(artefact, null, 2)} </Text>}
        </View>
    )
}

export default ArtefactDetailScreen;