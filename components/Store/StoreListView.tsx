import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { IBaseStoreItem, IBaseStoreItemImage } from '../../lib/Interfaces';
import { globalStyle } from '../../lib/Styles';
import StoreContext from './StoreContext';


interface Props {
    store: IBaseStoreItem,
    storeImage?: IBaseStoreItemImage
}

const StoreListView = ({ store }: Props) => {
    const { storeItems } = useContext(StoreContext);
    // console.log("Logging store", storeItems);
    return (

        <View style={globalStyle.listItem}>
            <Card containerStyle={globalStyle.containerStyle} wrapperStyle={globalStyle.wrapperStyle}>
                <Card.Title style={globalStyle.text}>{store.Name}</Card.Title>
                <Text style={globalStyle.text}>{store.Description}</Text>
                <Card.Divider />

            </Card>

        </View>
    )
}

export default StoreListView;

