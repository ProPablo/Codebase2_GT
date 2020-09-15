import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { IBaseStoreItem, IBaseStoreItemImage } from '../../lib/Interfaces';
import StoreContext from './StoreContext';


interface Props {
    store: IBaseStoreItem,
    storeImage?: IBaseStoreItemImage
}

const StoreListView = ({ store }: Props) => {
    const { storeItems } = useContext(StoreContext);
    console.log("Logging store", storeItems);
    return (

        <View style={styles.listItem}>
            <Card containerStyle={styles.containerStyle} wrapperStyle={styles.wrapperStyle}>
                <Card.Title style={styles.text}>{store.Name}</Card.Title>
                <Text style={styles.text}>{store.Description}</Text>
                <Card.Divider />

            </Card>

        </View>
    )
}

export default StoreListView;

const styles = StyleSheet.create({
    listItem: {
        padding: 2,
        margin: 2,

    },
    
    image: {

    },

    text: {
        color:'#000',
        textAlign:'center',
        fontFamily:'Roboto'
    },

    containerStyle: {
        borderRadius: 10,
        backgroundColor: '#C0D6DF',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 4,
    },

    wrapperStyle: {

    }
});
