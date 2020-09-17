import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EventDetailScreen from "./EventDetailsScreen";
import EventScreen from './EventsScreen';
import { ActionBarIcon } from '../../lib/Styles';

export type EventStackParams = {
    EventScreen: undefined;
    EventDetailScreen: { eventId: number | string };
}


const Stack = createStackNavigator<EventStackParams>();

export const EventStack: React.FC = () => {
    return (
        <Stack.Navigator>
            {/* TODO: make back button that navigates back to  */}
            <Stack.Screen name=" " component={EventScreen}
                options={{
                    headerLeft: props => <ActionBarIcon {...props} />
                }} />
            <Stack.Screen name="EventDetailScreen" component={EventDetailScreen} />
        </Stack.Navigator>
    )
}
