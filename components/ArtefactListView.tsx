import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IArtefact } from '../lib/Interfaces';

interface Props {
    artefact: IArtefact
}

const ArtefactListView = ({artefact}: Props) => {
    
    return (
        <View style={styles.listItem}>
            <Text>{artefact.Name}</Text>
            <Text>{artefact.Description}</Text>
        </View>
    )
}

export default ArtefactListView;

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      borderColor: "#f4cfce",
      borderWidth: 1,
      borderRadius: 10,
      margin: 2
    },
  });
