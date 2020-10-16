import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { event } from 'react-native-reanimated';
import { IBaseExhibition, IExhibition } from '../../lib/Interfaces';
import { globalStyle } from '../../lib/Styles';
import EventsContext from './EventContext';


interface Props {
    exhibition: IExhibition,
}

const ExhibitionListView = ({ exhibition }: Props) => {
    return (
        <View style={globalStyle.listItem}>
            <Card containerStyle={globalStyle.containerStyle} wrapperStyle={globalStyle.wrapperStyle}>
                <Card.Title style={globalStyle.text}>{exhibition.Name}</Card.Title>
                <Text style={globalStyle.text}>{exhibition.Description}</Text>
                <Card.Divider />
                {/* <Card.Image style={globalStyle.image} source={{
                    uri: exhibition.URI,
                }}/> */}

            </Card>

        </View>
    )
}

export default ExhibitionListView;
