
import React from 'react'
import { StyleSheet } from 'react-native';
import { Image } from "react-native-elements"

export function ActionBarIcon() {
    return (
        <Image
            source={{ uri: 'https://www.redlandmuseum.org.au/wp-content/uploads/2012/10/redland-museum-logo-wide.png' }}
            style={{ width: 300, height: 50, marginLeft: 15 }} />
    );
}

