import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import styles from '../styles';
import {Text} from '../../../../components';

const Player: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text>Player</Text>
      </View>
    </ScrollView>
  );
};

export default Player;
