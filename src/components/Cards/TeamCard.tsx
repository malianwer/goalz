import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common';

interface TeamCardProps {
  title: string;
  imageUrl: string;
  text: string;
  imageUrlOne: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  title,
  imageUrl,
  text,
  imageUrlOne,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentImg}>
        <Image source={imageUrlOne} style={styles.imageOne} />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentImg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    padding: 5,
    backgroundColor: Colors.white,
    width: 162,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  imageOne: {
    width: 20,
    height: 20,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 5,
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

export default TeamCard;
