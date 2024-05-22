import React, {FC} from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import styles from '../styles';
import {Text} from '../../../../components';
import {PieChart} from 'react-native-gifted-charts';
import {Colors} from '../../../../common';

const Statistics: FC = () => {
  const playerStats = [
    {name: 'Matches Played', value: 2},
    {name: 'Minutes Played', value: "180'"},
    {name: 'Goals', value: 0},
    {name: 'Assists', value: 0},
    {name: 'Passing Accuracy', value: '80%'},
    {name: 'Clearances', value: '1/2'},
    {name: 'Distance Covered', value: '11.54 km'},
    {name: 'Yellow Cards', value: 0},
    {name: 'Red Cards', value: 0},
    {name: 'Tackles Won', value: 6},
    {name: 'Top Speed', value: '28.4 km/h'},
    {name: 'Passes Completed', value: '32/37'},
  ];
  const pieData = [
    {value: 80, color: Colors.primary, text: '80%'},
    {value: 20, color: '#3867ed', text: '20%'},
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <View style={styles.mainChart}>
          <PieChart
            donut
            textColor="black"
            innerRadius={110}
            data={pieData}
            centerLabelComponent={() => (
              <View style={styles.centerText}>
                <Text style={styles.title}>11</Text>
                <Text>Matches Distribution</Text>
              </View>
            )}
          />
          <View style={styles.innerChartText}>
            <View style={styles.infoContainerText}>
              <Text style={styles.upperText}>Goals</Text>
              <Text style={styles.lowerText}>9</Text>
            </View>
            <View style={styles.infoContainerText}>
              <Text style={styles.upperText}>Assists</Text>
              <Text style={styles.lowerText}>2</Text>
            </View>
          </View>
        </View>

        <View style={styles.playerStats}>
          <FlatList
            data={playerStats}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View key={item.name}>
                  <View style={styles.infoContainer}>
                    <Text style={styles.upperText}>{item.name}</Text>
                    <Text style={styles.lowerText}>{item.value}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Statistics;
