import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

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
                onEndEditing={() => navigation.navigate('Calender')}
            />
        </View>
    );
};

export default DestinationSearchScreen;