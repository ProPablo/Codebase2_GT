import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ArtefactDetailsScreen from "./ArtefactDetailScreen";
import ArtefactsScreen from './ArtefactsScreen';
import { Image } from 'react-native-elements';

export type ArtefactStackParams = {
    ArtefactsScreen: undefined;
    ArtefactDetails: { artefactId: number | string };
}

function ActionBarIcon() {
    return (
        <Image
            source={{ uri: 'https://www.redlandmuseum.org.au/wp-content/uploads/2012/10/redland-museum-logo-wide.png' }}
            style={{ width: 300, height: 50, marginLeft: 15 }} />
    );
}

const Stack = createStackNavigator<ArtefactStackParams>();

export const ArtefactStack: React.FC = () => {
    return (
        <Stack.Navigator>
            {/* TODO: make back button that navigates back to  */}
            <Stack.Screen name=" " component={ArtefactsScreen}
                options={{
                    headerLeft: props => <ActionBarIcon {...props} />
                }} />
            <Stack.Screen name="ArtefactDetails" component={ArtefactDetailsScreen} />
        </Stack.Navigator>
    )
}
