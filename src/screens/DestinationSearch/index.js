import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
// import SuggestionRow from "./SuggestionRow";

// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Moving, Travelling, Just need a car?'
                value={inputText}
                onChangeText={setInputText}
            />
                  <FlatList
                        data={searchResults}
                        renderItem={({item}) => (
                        <Pressable onPress={() => navigation.navigate('Calender')} style={styles.row}>
                            <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                            </View>
                            <Text style={styles.locationText}>{item.description}</Text>
                        </Pressable>
                        )}
                    />
        </View>
    );
};

export default DestinationSearchScreen;