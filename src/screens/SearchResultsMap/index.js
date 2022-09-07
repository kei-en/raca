import React, { useState, useEffect, useRef } from 'react';
import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import places from "../../../assets/data/feed";
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from "../../components/PostCarouselItem";

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setConnected(true);
MapboxGL.setAccessToken(`${process.env.MAPBOX_API}`);


const SearchResultsMapScreen = (props) => {
    const componentDidMount = () => {
        MapboxGL.setTelemetryEnabled(false);
    }
    componentDidMount();
    
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const flatlist = useRef();
    const map = useRef();
  
    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef(({viewableItems}) => {
      if (viewableItems.length > 0) {
        const selectedPlace = viewableItems[0].item;
        setSelectedPlaceId(selectedPlace.id)
      }
    })

    const width = useWindowDimensions().width;

    useEffect(() => {
      if (!selectedPlaceId || !flatlist) {
        return;
      }
      const index = places.findIndex(place => place.id === selectedPlaceId)
      flatlist.current.scrollToIndex({index})
  
      // const selectedPlace = places[index];
      // const region = [selectedPlace.coordinate.latitude, selectedPlace.coordinate.longitude];
      // map.flyTo(region);
    }, [selectedPlaceId])
    
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.Camera ref={map} zoomLevel={9}
                centerCoordinate={[36.81667, -1.28333]}
            />
            {places.map(place => (
              <CustomMarker 
                coordinate={place.coordinate}
                price={place.newPrice}
                id={place.id}
                isSelected={place.id === selectedPlaceId}
                onPress={() => setSelectedPlaceId(place.id)} 
              />
            ))}
          </MapboxGL.MapView>
          <View style={{position: 'absolute', bottom: 20}}>
            <FlatList
              ref={flatlist}
              data={places}
              renderItem={({item}) => <PostCarouselItem post={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width - 60}
              snapToAlignment={"center"}
              decelerationRate={"fast"}
              viewabilityConfig={viewConfig.current}
              onViewableItemsChanged={onViewChanged.current}
            />
          </View>
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