import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TourScreen from "./TourScreen";
import HomeScreen from './HomeScreen';
import { ActionBarIcon } from '../../lib/Styles';

export type HomeStackParams = {
    HomeScreen: undefined;
    TourScreen: undefined;
}


const Stack = createStackNavigator<HomeStackParams>();

export const HomeStack: React.FC = () => {
    return (
        <Stack.Navigator>
            {/* TODO: make back button that navigates back to  */}
            <Stack.Screen name=" " component={HomeScreen}
                options={{
                    headerLeft: props => <ActionBarIcon {...props} />
                }} />
            <Stack.Screen name="TourScreen" component={TourScreen}/>
        </Stack.Navigator>
    )
}
