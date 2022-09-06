import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import places from "../../../assets/data/feed";
import CustomMarker from '../../components/CustomMarker';


MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setConnected(true);
MapboxGL.setAccessToken('pk.eyJ1Ijoia2VpLWVuIiwiYSI6ImNsN290MWFlNDEwcHkzb25ia2xiaW9memkifQ.8GIPwLXVq7XnvMjojh8s5w');


const SearchResultsMapScreen = (props) => {
    const componentDidMount = () => {
        MapboxGL.setTelemetryEnabled(false);
    }
    componentDidMount();
    
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.Camera zoomLevel={9}
                centerCoordinate={[36.81667, -1.28333]}
            />
            {places.map(place => (
              <CustomMarker 
                coordinate={place.coordinate}
                price={place.newPrice}
                id={place.id}
                isSelected={place.id === selectedPlaceId}
                onSelected={() => setSelectedPlaceId(place.id)} 
              />
            ))}
          </MapboxGL.MapView>
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