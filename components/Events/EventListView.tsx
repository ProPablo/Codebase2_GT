import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { event } from 'react-native-reanimated';
import { IBaseExhibition, IExhibition } from '../../lib/Interfaces';
import { ListViewStyles } from '../../lib/Styles';
import EventsContext from './EventContext';


interface Props {
    exhibition: IExhibition,
}

const ExhibitionListView = ({ exhibition }: Props) => {
    return (
        <View style={ListViewStyles.listItem}>
            <Card containerStyle={ListViewStyles.containerStyle} wrapperStyle={ListViewStyles.wrapperStyle}>
                <Card.Title style={ListViewStyles.text}>{exhibition.Name}</Card.Title>
                <Text style={ListViewStyles.text}>{exhibition.Description}</Text>
                <Card.Divider />
                <Card.Image style={ListViewStyles.image} source={{
                    uri: exhibition.URI,
                }}/>

            </Card>

        </View>
    )
}

export default ExhibitionListView;
