import React, { } from 'react'
import { StyleSheet, Text, View, PanResponder, Animated, ScrollView } from 'react-native';

const minScale = 0.5;
const maxScale = 2;

export interface Props {
    children: React.ReactNode
}

export default function Transform(props: Props) {
    return (
        <View>
            <ScrollView maximumZoomScale={3} minimumZoomScale={0.01}>
                {props.children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "blue",
        borderRadius: 5,
        height: 150,
        width: 150,
    }
})
