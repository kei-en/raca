import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setConnected(true);
MapboxGL.setAccessToken('pk.eyJ1Ijoia2VpLWVuIiwiYSI6ImNsN290MWFlNDEwcHkzb25ia2xiaW9memkifQ.8GIPwLXVq7XnvMjojh8s5w');


const SearchResultsMapScreen = () => {
    const componentDidMount = () => {
        MapboxGL.setTelemetryEnabled(false);
    }
    componentDidMount();
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'tomato'
    },
    map: {
      flex: 1
    }
});

export default SearchResultsMapScreen;