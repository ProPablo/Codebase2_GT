import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { IBaseStoreItem, IBaseStoreItemImage } from '../../lib/Interfaces';
import { ListViewStyles } from '../../lib/Styles';
import StoreContext from './StoreContext';


interface Props {
    store: IBaseStoreItem,
    storeImage?: IBaseStoreItemImage
}

const StoreListView = ({ store }: Props) => {
    const { storeItems } = useContext(StoreContext);
    // console.log("Logging store", storeItems);
    return (

        <View style={ListViewStyles.listItem}>
            <Card containerStyle={ListViewStyles.containerStyle} wrapperStyle={ListViewStyles.wrapperStyle}>
                <Card.Title style={ListViewStyles.text}>{store.Name}</Card.Title>
                <Text style={ListViewStyles.text}>{store.Description}</Text>
                <Card.Divider />

            </Card>

        </View>
    )
}

export default StoreListView;

