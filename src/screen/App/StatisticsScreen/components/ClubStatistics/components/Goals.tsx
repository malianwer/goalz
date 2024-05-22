import React, {FC, useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';
import styles from '../../../styles';
import {Text} from '../../../../../../components';
import SearchInput from '../../../../../../components/SearchInput';

interface Item {
  key: number;
  name: string;
  country: string;
  possession: string;
  accuracy: string;
  attempted: string;
  completed: string;
  played: string;
}

const Goals: FC = () => {
  const [items] = useState<Item[]>([
    {
      key: 1,
      name: 'Real Madrid',
      country: 'ESP',
      possession: '72',
      accuracy: '92',
      attempted: '826',
      completed: '778',
      played: '2',
    },
    {
      key: 2,
      name: 'Real Madrid',
      country: 'ESP',
      possession: '72',
      accuracy: '92',
      attempted: '826',
      completed: '778',
      played: '2',
    },
    {
      key: 3,
      name: 'Real Madrid',
      country: 'ESP',
      possession: '72',
      accuracy: '92',
      attempted: '826',
      completed: '778',
      played: '2',
    },
    {
      key: 4,
      name: 'Real Madrid',
      country: 'ESP',
      possession: '72',
      accuracy: '92',
      attempted: '826',
      completed: '778',
      played: '2',
    },
  ]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.groupContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.groupHeadingContainer}>
            <Text style={styles.groupHeading}>Goals Statistics</Text>
            <View style={styles.w45}>
              <SearchInput placeholder="Search" />
            </View>
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Country</DataTable.Title>
              <DataTable.Title>Possession</DataTable.Title>
              <DataTable.Title>Accuracy</DataTable.Title>
              <DataTable.Title>Attempted</DataTable.Title>
              <DataTable.Title>Completed</DataTable.Title>
              <DataTable.Title>Played</DataTable.Title>
            </DataTable.Header>

            {items.map(item => (
              <TouchableOpacity onPress={() => {}} key={item.key}>
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.country}</DataTable.Cell>
                  <DataTable.Cell>{item.possession}</DataTable.Cell>
                  <DataTable.Cell>{item.accuracy}</DataTable.Cell>
                  <DataTable.Cell>{item.attempted}</DataTable.Cell>
                  <DataTable.Cell>{item.completed}</DataTable.Cell>
                  <DataTable.Cell>{item.played}</DataTable.Cell>
                </DataTable.Row>
              </TouchableOpacity>
            ))}
          </DataTable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Goals;
