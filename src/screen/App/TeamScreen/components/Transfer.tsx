import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import styles from '../styles';
import {Text} from '../../../../components';

const Transfer: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text>Transfer</Text>
      </View>
    </ScrollView>
  );
};

export default Transfer;
