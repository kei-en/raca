import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles';
// import {useNavigation} from '@react-navigation/native';
// import SuggestionRow from "./SuggestionRow";

// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {

//   const navigation = useNavigation();
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Moving, Travelling, Just need a car?'
                value={inputText}
                onChangeText={setInputText}
            />
        </View>
    );
};

export default DestinationSearchScreen;