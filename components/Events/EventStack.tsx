import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ArtefactDetailsScreen from "./EventDetailsScreen";
import EventScreen from './EventsScreen';

export type ArtefactStackParams = {
    ArtefactsScreen: undefined;
    ArtefactDetails: { artefactId: number | string };
}


const Stack = createStackNavigator<ArtefactStackParams>();

export const ArtefactStack: React.FC = ()=> {
    return (
        <Stack.Navigator>
            {/* TODO: make back button that navigates back to  */}
            <Stack.Screen name="ArtefactsScreen" component={EventScreen} /> 
            <Stack.Screen name="ArtefactDetails" component={ArtefactDetailsScreen} />
        </Stack.Navigator>
    )
}
