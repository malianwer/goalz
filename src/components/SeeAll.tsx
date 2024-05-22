import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '.';
import {Colors} from '../common';

interface Props {
  title: string;
  onPress: () => void;
}

const SeeAll: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.seeAll}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seeAll: {
    color: Colors.primary,
    fontWeight: '400',
  },
});

export default SeeAll;
