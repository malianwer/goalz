import React, {FC} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '../../../common';
import {Text} from '../../../components';

interface Props {
  onPress: () => void;
  img: string;
  text: string;
}

const SocialButton: FC<Props> = ({onPress, img, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.googleContainer}>
        {/* @ts-ignore */}
        {img && <Image style={styles.imgGoogle} source={img} />}
        <Text style={styles.socialText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: 'row',
  },
  imgGoogle: {
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    objectFit: 'contain',
    marginRight: 10,
  },
  socialText: {
    color: Colors.black,
    fontWeight: '800',
  },
});

export default SocialButton;
