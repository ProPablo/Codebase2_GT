import React, { useContext } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StoreStackParams } from './StoreStack';
import StoresContext from './StoreContext';
import StoreContext from './StoreContext';

type StoreStackRoute = RouteProp<StoreStackParams, 'StoreDetailScreen'>

interface Props {
    route: StoreStackRoute
}


const StoreDetailScreen: React.FC<Props> = ({ route }) => {

    const { storeId } = route.params;
    const { storeItems, storeImages } = useContext(StoreContext);
    if (!storeItems) {
        return (<Text>Get stick bugged lol</Text>)
    }
    const store = storeItems.find((item) => item.Id === storeId);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Store Details!</Text>
            <Text>This is id: {storeId}</Text>
            {store &&
                <View>
                    <Text> {store.Name}</Text>
                    <Image source={{
                        uri: "data:image/jpeg;base64," + store.StoreItemImages, 
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

export default StoreDetailScreen;