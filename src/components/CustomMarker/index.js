import MapboxGL from "@rnmapbox/maps";
import React from "react";
import { Text, View } from "react-native";

const CustomMarker = (props) => {
    const { coordinate, price, onPress, isSelected } = props;

    return (
        <MapboxGL.PointAnnotation coordinate={coordinate} onPress={onPress}>
            <View style={{
                backgroundColor: isSelected ? "black" : "white",
                padding: 5,
                borderRadius: 5,
                borderColor: "grey",
                borderWidth: 1,
                width: 75,
                height: 30
            }}>
                <Text style={{ color: isSelected ? "white" : "black", fontWeight: "bold" }}>KES {price}</Text>
            </View>
        </MapboxGL.PointAnnotation>
    )
}

export default CustomMarker;