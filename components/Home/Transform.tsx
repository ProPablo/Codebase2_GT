import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PinchGestureHandler, PanGestureHandler, State, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';

const minScale = 0.5;
const maxScale = 2;

const USE_NATIVE_DRIVER = true;

export default class Transform extends React.Component {

    onPinchGestureEvent: (...args: any[]) => void;
    lastScale: number;
    scale: Animated.AnimatedMultiplication;
    pinchScale: Animated.Value;
    baseScale: Animated.Value;
    panRef = React.createRef<PanGestureHandler>();
    pinchRef = React.createRef<PinchGestureHandler>();
    constructor(props) {
        super(props);

        /* Pinching */
        this.baseScale = new Animated.Value(1);
        this.pinchScale = new Animated.Value(1);
        this.scale = Animated.multiply(this.baseScale, this.pinchScale);
        this.lastScale = 1;
        this.onPinchGestureEvent = Animated.event(
            [{ nativeEvent: { scale: this.pinchScale } }],
            { useNativeDriver: USE_NATIVE_DRIVER }
        );

    }

    onPinchHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            this.lastScale *= event.nativeEvent.scale;
            this.baseScale.setValue(this.lastScale);
            this.pinchScale.setValue(1);
        }
    };


    // const panResponder = useRef(
    //     PanResponder.create({
    //         onMoveShouldSetPanResponder: () => true,
    //         onPanResponderGrant: () => {
    //             pan.setOffset({
    //                 x: pan.x._value,
    //                 y: pan.y._value
    //             });
    //         },
    //         onPanResponderMove: (event, gestureState) => {
    //             const touches = event.nativeEvent.touches;

    //             if (touches.length >= 2) {
    //                 // We have a pinch-to-zoom movement
    //                 // Track locationX/locationY to know by how much the user moved their fingers
    //Distance between fingers (1/Math.sqr((ax-bx)**2 + (ay-by)**2)* scale ) if scale>minScale = minscale; 

    //             } else {
    //                 // We have a regular scroll movement
    //                 Animated.event([
    //                     null,
    //                     { dx: pan.x, dy: pan.y }
    //                 ]) ({});
    //             }
    //         },
    //         onPanResponderRelease: () => {
    //             pan.flattenOffset();
    //         }
    //     })
    // ).current;
    render() {

        return (
            <View>
                <PinchGestureHandler
                    onGestureEvent={this.onPinchGestureEvent}
                    onHandlerStateChange={this.onPinchHandlerStateChange}>
                    <Animated.View
                        style={[
                            {
                                transform: [{ scale: this.scale }],
                            },
                        ]}
                    >
                        {this.props.children}
                    </Animated.View>
                </PinchGestureHandler>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "blue",
        borderRadius: 5,
        height: 150,
        width: 150,
    }
})
