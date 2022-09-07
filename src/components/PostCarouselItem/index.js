import React from 'react';
import { Pressable, View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';


const Post = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }

  return (
    <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60}]}>
        <View style={styles.innerContainer}>
            {/* Image  */}
            <Image
                style={styles.image}
                source={{uri: post.image}}
            />
            <View style={{flex: 1, marginHorizontal: 10}}>
                {/* Car Details  */}
                <Text style={styles.title}>
                    {post.make} {post.model} {post.year}
                </Text>

                {/* Type & Description */}
                <Text style={styles.description} numberOfLines={2}>
                    {post.trips} Trips
                </Text>

                {/*  Old price & new price */}
                <Text style={styles.prices}>
                    <Text style={styles.price}>  KES {post.newPrice} </Text>
                    / day
                </Text>
            </View>
        </View>
    </Pressable>
  );
};

export default Post;