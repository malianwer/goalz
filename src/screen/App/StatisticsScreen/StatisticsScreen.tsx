import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import {Screen, Stepper} from '../../../components';
import styles from './styles';
import {ClubStatistics, GoalsStatistics, PlayerStatistics} from './components';

const StatisticsScreen: FC = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const data = ['Goals Statistics', 'Club Statistics', 'Player Statistics'];
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Stepper
            data={data}
            selectedItem={selectedItem}
            onSelect={setSelectedItem}
          />
          {selectedItem === 0 && <GoalsStatistics />}
          {selectedItem === 1 && <ClubStatistics />}
          {selectedItem === 2 && <PlayerStatistics />}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default StatisticsScreen;
