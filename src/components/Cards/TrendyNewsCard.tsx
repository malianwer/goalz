import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common';

interface TrendyNewsCardProps {
  text: string;
  date: string;
  title: string;
  category: string;
  readTime: string;
  imageUrl: string;
  newsChannelImg: string;
  onPress: () => void;
}

const TrendyNewsCard: React.FC<TrendyNewsCardProps> = ({
  text,
  date,
  title,
  category,
  readTime,
  imageUrl,
  newsChannelImg,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Image style={styles.imageNews} source={newsChannelImg} />
          <Text style={styles.source}>{text}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.date}>{readTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageNews: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  container: {
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
    width: 300,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  source: {
    fontSize: 13,
    marginRight: 10,
    color: Colors.gray,
  },
  category: {
    fontSize: 13,
    marginRight: 10,
    color: Colors.primary,
  },
  date: {
    fontSize: 13,
    color: Colors.gray,
  },
});

export default TrendyNewsCard;
