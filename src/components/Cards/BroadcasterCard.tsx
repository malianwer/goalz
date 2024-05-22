import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common';

interface BroadcasterCardProps {
  title: string;
  imageUrl: string;
}

const BroadcasterCard: React.FC<BroadcasterCardProps> = ({title, imageUrl}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentImage}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    padding: 5,
    backgroundColor: Colors.white,
    width: 162,
  },
  contentImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderRadius: 8,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
  },
});

export default BroadcasterCard;
