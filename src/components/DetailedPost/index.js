import React from 'react';
import {View, Text, Image, ScrollView,} from 'react-native';
import styles from './styles.js';

const days = 7;

const DetailedPost = (props) => {

  const post = props.post;

  return (
    <ScrollView>
        <View style={styles.container}>
            {/* Image  */}
            <Image
            style={styles.image}
            source={{uri: post.image}}
            />

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
                <Text style={styles.price}>  KES{post.newPrice} </Text>
                / day
            </Text>

            {/*  Total price */}
            <Text style={styles.totalPrice}>KES{post.newPrice * days} total</Text>

            <Text style={styles.longDescription}>{post.description}</Text>
        </View>
    </ScrollView>
  )
}

export default DetailedPost;