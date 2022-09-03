import React from "react";
import styles from "./styles";
import DateRangePicker from './DateRangePicker';
import { View, Pressable,Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CalenderScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <DateRangePicker
        initialRange={['2022-08-27', '2022-09-02']}
        onSuccess={(s, e) => alert(s + '||' + e)}
        theme={{ markColor: 'red', markTextColor: 'white' }}
      />
      <Pressable
        onPress={() =>
        navigation.navigate('Home', {
        screen: 'Explore',
        params: {
          screen: 'SearchResults',
        },})} style={{
          marginTop: 50,
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
          width: '80%',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        Search
        </Text>
      </Pressable>

    </View>
  );
}

export default CalenderScreen;