import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Platform } from "react-native";
import MapView, { Marker, MapPressEvent } from "react-native-maps";

export default function Home() {
    const [selectedLocation, setSelectedLocation] = useState<{ latitude: number; longitude: number } | null>(null);

    const handleMapPress = (event: MapPressEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setSelectedLocation({ latitude, longitude });
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 23.8103,
                    longitude: 90.4125,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                onPress={handleMapPress}
            >
                {selectedLocation && <Marker coordinate={selectedLocation} title="Selected Destination" />}
            </MapView>

            {selectedLocation && (
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Lat: {selectedLocation.latitude.toFixed(4)}</Text>
                    <Text style={styles.infoText}>Lng: {selectedLocation.longitude.toFixed(4)}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    infoBox: {
        position: "absolute",
        bottom: 40,
        left: 20,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        elevation: 5,
    },
    infoText: {
        fontSize: 14,
    },
});
