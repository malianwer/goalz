import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../../styles';
import {Text} from '../../../../../components';
import {BarChart} from 'react-native-gifted-charts';
import {Colors} from '../../../../../common';
const GoalsStatistics: FC = () => {
  const barData = [
    {value: 250, label: 'M', frontColor: Colors.primary},
    {value: 500, label: 'T', frontColor: Colors.primary},
    {value: 745, label: 'W', frontColor: Colors.primary},
    {value: 320, label: 'T', frontColor: Colors.primary},
    {value: 600, label: 'F', frontColor: Colors.primary},
    {value: 256, label: 'S', frontColor: Colors.primary},
    {value: 300, label: 'S', frontColor: Colors.primary},
  ];

  const data = [
    {id: 1, name: '48', value: 'Total Goals'},
    {id: 2, name: '3.00', value: 'Goals per Match'},
    {id: 3, name: '30’', value: 'Minutes per Goal'},
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginVertical: 10}}>
        <Text style={styles.title}>Competition Statistics Goals</Text>
      </View>
      <View style={styles.flexDirection}>
        {data.map(item => {
          return (
            <View key={item.id} style={styles.mainGraphContainer}>
              <Text style={styles.heading}>{item.name}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          );
        })}
      </View>

      <View style={{marginVertical: 10}}>
        <Text style={styles.titleTwo}>When The Goals Were Scored</Text>
      </View>

      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </ScrollView>
  );
};

export default GoalsStatistics;
