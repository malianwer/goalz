import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common';

interface HotNewsCardProps {
  date: string;
  readTime: string;
  title: string;
  imageSource: any;
  onPress: () => void;
}

const HotNewsCard: React.FC<HotNewsCardProps> = ({
  date,
  readTime,
  title,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.readTime}>{readTime}</Text>
        </View>
        <Text style={styles.title}>{title.slice(0, 50) + '...'}</Text>
      </View>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.black,
  },
  date: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 5,
    marginRight: 5,
  },
  category: {
    fontSize: 12,
    color: '#007bff',
    marginBottom: 5,
  },
  readTime: {
    fontSize: 12,
    color: '#888888',
  },
});

export default HotNewsCard;
