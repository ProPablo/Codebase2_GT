import React, { useState, useCallback, useRef, useContext } from "react";
import { RouteProp } from '@react-navigation/native';
import { ArtefactStackParams } from './ArtefactStack';
import { Text, View, SafeAreaView } from "react-native";
import ArtefactsContext from './ArtefactsContext';
import Carousel from "react-native-snap-carousel";
import { IArtefact, IArtefactInfo, IArtefactInfoFile, IBaseArtefact } from "../../lib/Interfaces";

interface Props {
    artefactInfos: IArtefactInfo[],
}

interface CustomCarouselProps { }
interface RenderItemProps {
    item: IBaseArtefact;
    index: number;
}



export const CustomCarousel: React.FC<Props> = ({artefactInfos}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const ref = useRef(null);



    const renderItem = useCallback(({ index, item }: RenderItemProps) => {
        return (
            <View
                style={{
                    backgroundColor: "floralwhite",
                    borderRadius: 5,
                    height: 250,
                    padding: 50,
                    marginLeft: 25,
                    marginRight: 25,
                }}
            >
                <Text style={{ fontSize: 30 }}>{artefactInfos}</Text>
                <Text>{}</Text>
            </View>
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                <Carousel
                    layout={"default"}
                    ref={ref}
                    data={artefactInfos}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={renderItem}
                    onSnapToItem={(index: number) => setActiveIndex(index)}
                />
            </View>
        </SafeAreaView>
    );
};

export default CustomCarousel;