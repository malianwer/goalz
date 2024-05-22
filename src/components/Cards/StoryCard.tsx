import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common';

interface StoryCardProps {
  text: string;
  ImageUrl: string;
}

const StoryCard: React.FC<StoryCardProps> = ({text, ImageUrl}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.img} source={ImageUrl} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: Colors.lightGray,
  },
  text: {
    marginTop: 5,
    color: Colors.black,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default StoryCard;
