import React, {FC, useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';
import styles from '../../../styles';
import {Text} from '../../../../../../components';
import SearchInput from '../../../../../../components/SearchInput';

interface Item {
  key: number;
  name: string;
  club: string;
  goals: string;
  rightFoot: string;
  leftFoot: string;
  head: string;
  other: string;
  penalties: string;
  played: string;
}

const Goals: FC = () => {
  const [items] = useState<Item[]>([
    {
      key: 1,
      name: 'Casemiro',
      club: 'ESP',
      goals: '9',
      rightFoot: '9',
      leftFoot: '8',
      head: '7',
      other: '2',
      penalties: '5',
      played: '4',
    },
    {
      key: 2,
      name: 'Julián Álvarez',
      club: 'BAY',
      goals: '9',
      rightFoot: '2',
      leftFoot: '2',
      head: '8',
      other: '1',
      penalties: '0',
      played: '2',
    },
    {
      key: 3,
      name: 'Galeno',
      club: 'MCI',
      goals: '9',
      rightFoot: '9',
      leftFoot: '6',
      head: '8',
      other: '2',
      penalties: '3',
      played: '2',
    },
    {
      key: 4,
      name: 'Kevin Kelsy',
      club: 'MUN',
      goals: '9',
      rightFoot: '9',
      leftFoot: '6',
      head: '8',
      other: '2',
      penalties: '0',
      played: '2',
    },
    {
      key: 5,
      name: 'Kevin Kelsy',
      club: 'MUN',
      goals: '9',
      rightFoot: '9',
      leftFoot: '6',
      head: '8',
      other: '2',
      penalties: '0',
      played: '2',
    },
    {
      key: 6,
      name: 'Kevin Kelsy',
      club: 'MUN',
      goals: '9',
      rightFoot: '9',
      leftFoot: '6',
      head: '8',
      other: '2',
      penalties: '0',
      played: '2',
    },
    {
      key: 7,
      name: 'Kevin Kelsy',
      club: 'MUN',
      goals: '9',
      rightFoot: '9',
      leftFoot: '6',
      head: '8',
      other: '2',
      penalties: '0',
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
              <DataTable.Title>Club</DataTable.Title>
              <DataTable.Title>Goals</DataTable.Title>
              <DataTable.Title>Right</DataTable.Title>
              <DataTable.Title>Left</DataTable.Title>
              <DataTable.Title>Head</DataTable.Title>
              <DataTable.Title>Other</DataTable.Title>
              <DataTable.Title>Penalties</DataTable.Title>
              <DataTable.Title>Played</DataTable.Title>
            </DataTable.Header>

            {items.map(item => (
              <TouchableOpacity onPress={() => {}} key={item.key}>
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.club}</DataTable.Cell>
                  <DataTable.Cell>{item.goals}</DataTable.Cell>
                  <DataTable.Cell>{item.rightFoot}</DataTable.Cell>
                  <DataTable.Cell>{item.leftFoot}</DataTable.Cell>
                  <DataTable.Cell>{item.head}</DataTable.Cell>
                  <DataTable.Cell>{item.other}</DataTable.Cell>
                  <DataTable.Cell>{item.penalties}</DataTable.Cell>
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
