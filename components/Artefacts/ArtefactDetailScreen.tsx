import React, { useContext, useRef, useState } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ArtefactStackParams } from './ArtefactStack';
import ArtefactsContext from './ArtefactsContext';
import { ScrollView } from 'react-native-gesture-handler';
import CustomCarousel from './ArtefactDetailCarousel';

type ArtefactStackRoute = RouteProp<ArtefactStackParams, 'ArtefactDetails'>

interface Props {
    route: ArtefactStackRoute
}

const ArtefactDetailScreen: React.FC<Props> = ({ route }) => {
    const { artefactId } = route.params;
    const { artefacts } = useContext(ArtefactsContext);

    //console.log("artefacts from deatil scrren", artefacts);
    const artefact = artefacts?.find((item) => item.Id === artefactId);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CustomCarousel
                artefactInfos={artefact?.Infos}
            />

            <Text>Artefact Details!</Text>
            <Text>This is id: {artefactId}</Text>
            {artefact &&
                <View>
                    <Text> {artefact.Name}</Text>
                    <Image source={{
                        uri: artefact.URI,
                    }} style={styles.image} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }
});

export default ArtefactDetailScreen;