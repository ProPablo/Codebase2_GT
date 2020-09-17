import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { IBaseExhibition } from '../../lib/Interfaces';
import { ListViewStyles } from '../../lib/Styles';
import EventsContext from './EventContext';


interface Props {
    exhibition: IBaseExhibition
}

const ExhibitionListView = ({ exhibition }: Props) => {
    // const { events } = useContext(EventsContext);
    // console.log("Logging events", events);
    return (

        <View style={ListViewStyles.listItem}>
            <Card containerStyle={ListViewStyles.containerStyle} wrapperStyle={ListViewStyles.wrapperStyle}>
                <Card.Title style={ListViewStyles.text}>{exhibition.Name}</Card.Title>
                <Text style={ListViewStyles.text}>{exhibition.Description}</Text>
                <Card.Divider />

            </Card>

        </View>
    )
}

export default ExhibitionListView;
