import React, {FC, ReactNode} from 'react';
import {StyleSheet, type TextStyle, SafeAreaView, View} from 'react-native';
import {Colors} from '../common';

interface Props {
  style?: TextStyle;
  children: ReactNode;
}

const Screen: FC<Props> = ({style, children}) => {
  return (
    <SafeAreaView>
      <View style={{...styles.container, ...style}}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    height: '100%',
    paddingBottom: 10,
  },
});

export default Screen;
