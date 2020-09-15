import React, { useContext } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { EventStackParams } from './EventStack';
import EventsContext from './EventContext';

type EventStackRoute = RouteProp<EventStackParams, 'EventDetailScreen'>

interface Props {
    route: EventStackRoute
}


const EventDetailScreen: React.FC<Props> = ({ route }) => {

    const { eventId } = route.params;
    const events = useContext(EventsContext);
    const event = events?.find((item) => item.Id === eventId);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Event Details!</Text>
            <Text>This is id: {eventId}</Text>
            {event &&
                <View>
                    <Text> {event.Name}</Text>
                    <Image source={{
                        uri: "data:image/jpeg;base64," + event.Image, 
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

export default EventDetailScreen;