import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../../styles';
import {ButtonStepper, Text} from '../../../../../components';
import {Save, Disciplinary, Goals, BallRecovered, Assists} from './components';

const PlayerStatistics: FC = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const data = ['Goals', 'Assists', 'Ball Recovered', 'Saves', 'Disciplinary'];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginVertical: 10}}>
        <Text style={styles.title}>Player Statistics</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <ButtonStepper
          data={data}
          selectedItem={selectedItem}
          onSelect={setSelectedItem}
        />
      </View>
      {selectedItem === 0 && <Goals />}
      {selectedItem === 1 && <Assists />}
      {selectedItem === 2 && <BallRecovered />}
      {selectedItem === 3 && <Save />}
      {selectedItem === 4 && <Disciplinary />}
    </ScrollView>
  );
};

export default PlayerStatistics;
