import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import styles from '../styles';
import {Text} from '../../../../components';

const Match: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text>Match</Text>
      </View>
    </ScrollView>
  );
};

export default Match;
