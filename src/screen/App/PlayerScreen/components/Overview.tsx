import React, {FC} from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import styles from '../styles';
import {Text} from '../../../../components';
import {playerData} from '../../../../common/DummyData';

const Overview: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <FlatList
          data={playerData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => {
            return (
              <View key={item.title}>
                <View style={styles.infoContainerOverview}>
                  <Text style={styles.upperText}>{item.title}</Text>
                  <Text style={styles.lowerText}>{item.value}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Overview;
