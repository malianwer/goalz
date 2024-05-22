import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import styles from '../styles';
import {Text} from '../../../../components';

const About: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text>About</Text>
      </View>
    </ScrollView>
  );
};

export default About;
