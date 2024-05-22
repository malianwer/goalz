import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../../styles';
import {ButtonStepper, Text} from '../../../../../components';
import {
  CleanSheets,
  Disciplinary,
  Goals,
  PassingAccuracy,
  Possession,
} from './components';

const ClubStatistics: FC = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const data = ['Goals', 'Possession', 'Accuracy', 'Sheets', 'Disciplinary'];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginVertical: 10}}>
        <Text style={styles.title}>Club Statistics</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <ButtonStepper
          data={data}
          selectedItem={selectedItem}
          onSelect={setSelectedItem}
        />
      </View>
      {selectedItem === 0 && <Goals />}
      {selectedItem === 1 && <Possession />}
      {selectedItem === 2 && <PassingAccuracy />}
      {selectedItem === 3 && <CleanSheets />}
      {selectedItem === 4 && <Disciplinary />}
    </ScrollView>
  );
};

export default ClubStatistics;
