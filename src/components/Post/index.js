import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
// import { useNavigation } from '@react-navigation/native';

const days = 7;

const Post = (props) => {

  const post = props.post;

//   const navigation = useNavigation();

//   const goToPostPage = () => {
//     navigation.navigate('Post', {postId: post.id});
//   }

  return (
    <Pressable 
        // onPress={goToPostPage} 
        style={styles.container}
    >
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: post.image}}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.title}>
        {post.make} {post.model} {post.year}
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.trips} Trips
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.price}>  KES{post.newPrice} </Text>
        / day
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>KES{post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;