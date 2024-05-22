import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import {Screen, Stepper, Text} from '../../../components';
import styles from './styles';
import {Matchs, Table, Teams} from './components';

const CompetitionScreen: FC = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const data = ['Matches', 'Teams', 'Table', 'Collections', 'News'];
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Stepper
            data={data}
            selectedItem={selectedItem}
            onSelect={setSelectedItem}
          />

          {selectedItem === 0 && <Matchs />}
          {selectedItem === 1 && <Teams />}
          {selectedItem === 2 && <Table />}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default CompetitionScreen;
