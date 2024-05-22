import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../common';

interface AvatarCardProps {
  icon: any;
  text: string;
  value: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({icon, text, value}) => {
  return (
    <View style={styles.viewInsideContainer}>
      <View style={styles.views}>
        {icon}
        <Text style={styles.viewsValue}>
          {value} {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewInsideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  views: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightgrey,
    paddingHorizontal: 10,
    borderRadius: 25,
    paddingVertical: 7,
  },
  viewsValue: {
    marginLeft: 5,
    color: Colors.black,
  },
});

export default AvatarCard;
