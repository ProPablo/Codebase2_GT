import React from 'react'
import {
    View,
    Text,
} from 'react-native';

export default function ArtefactDetailScreen({ route, navigation }) {
    const [artefact, setartefact] = useState(null);
    
    useEffect(() => {
        const { Id } = route.params;
        (async ()=> {
            const apiRes = await fetch("https://api.kanye.rest");
            const json = await apiRes.json();
            setartefact(json);
        })();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Artefact Details!</Text>
            <Text>This is id: {Id}</Text>
            {artefact && <Text>{JSON.stringify(artefact, null, 2)} </Text>}
        </View>
    )
}