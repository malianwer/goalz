import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common';

interface TopHeadlineNewCardProps {
  title: string;
  onPress: () => void;
}

const TopHeadlineNewCard: React.FC<TopHeadlineNewCardProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default TopHeadlineNewCard;
