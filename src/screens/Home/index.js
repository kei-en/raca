import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto"
import styles from "./styles";

const HomeScreen = (props) => {
    return (
        <View>
            <Pressable
                style={styles.searchButton}
                // onPress={() => navigation.navigate('Destination Search')}
                >
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>Moving, Travelling, Just need a car?</Text>
            </Pressable>

            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.image}>
                <Text style={styles.title}>Go Near</Text>

                <Pressable
                style={styles.button}
                // onPress={() => console.warn('Explore Btn clicked')}
                >
                <Text style={styles.buttonText}>Explore nearby hosts</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
};

export default HomeScreen;