import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

import {Text} from '.';
import {Colors, Fonts} from '../common';

type LabelSize = 'sm' | 'md' | 'lg';

interface Props {
  title: string;
  size?: LabelSize;
}

const Label: FC<Props> = ({title, size = 'sm'}) => {
  return (
    <Text
      style={
        size === 'md'
          ? styles.medium
          : size === 'lg'
          ? styles.large
          : styles.small
      }>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.black,
  },
  medium: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: -0.408,
    lineHeight: 22,
    color: Colors.black,
  },
  large: {
    color: Colors.black,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.41,
    fontFamily: Fonts.SemiBold,
  },
});

export default Label;
