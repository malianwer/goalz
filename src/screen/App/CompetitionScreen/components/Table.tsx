import React, {FC, useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {DataTable} from 'react-native-paper';
import {Text} from '../../../../components';

interface Item {
  key: number;
  name: string;
  played: string;
  won: string;
  draw: string;
  lost: string;
  points: string;
  gd: string;
}

const Table: FC = () => {
  const [items] = useState<Item[]>([
    {
      key: 1,
      name: 'Manchester United',
      played: '10',
      won: '0',
      draw: '0',
      lost: '0',
      points: '0',
      gd: '0',
    },
    {
      key: 2,
      name: 'Manchester United',
      played: '10',
      won: '0',
      draw: '0',
      lost: '0',
      points: '0',
      gd: '0',
    },
    {
      key: 3,
      name: 'Manchester United',
      played: '10',
      won: '0',
      draw: '0',
      lost: '0',
      points: '0',
      gd: '0',
    },
    {
      key: 4,
      name: 'Manchester United',
      played: '10',
      won: '0',
      draw: '0',
      lost: '0',
      points: '0',
      gd: '0',
    },
  ]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.groupContainer}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.groupHeading}>Group A</Text>
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Played</DataTable.Title>
              <DataTable.Title>Won</DataTable.Title>
              <DataTable.Title>Drawn</DataTable.Title>
              <DataTable.Title>Lost</DataTable.Title>
              <DataTable.Title>GD</DataTable.Title>
              <DataTable.Title>Points</DataTable.Title>
            </DataTable.Header>

            {items.map(item => (
              <TouchableOpacity onPress={() => {}} key={item.key}>
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.played}</DataTable.Cell>
                  <DataTable.Cell>{item.won}</DataTable.Cell>
                  <DataTable.Cell>{item.draw}</DataTable.Cell>
                  <DataTable.Cell>{item.lost}</DataTable.Cell>
                  <DataTable.Cell>{item.gd}</DataTable.Cell>
                  <DataTable.Cell>{item.points}</DataTable.Cell>
                </DataTable.Row>
              </TouchableOpacity>
            ))}
          </DataTable>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.groupHeading}>Group B</Text>
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Played</DataTable.Title>
              <DataTable.Title>Won</DataTable.Title>
              <DataTable.Title>Drawn</DataTable.Title>
              <DataTable.Title>Lost</DataTable.Title>
              <DataTable.Title>GD</DataTable.Title>
              <DataTable.Title>Points</DataTable.Title>
            </DataTable.Header>

            {items.map(item => (
              <TouchableOpacity onPress={() => {}} key={item.key}>
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.played}</DataTable.Cell>
                  <DataTable.Cell>{item.won}</DataTable.Cell>
                  <DataTable.Cell>{item.draw}</DataTable.Cell>
                  <DataTable.Cell>{item.lost}</DataTable.Cell>
                  <DataTable.Cell>{item.gd}</DataTable.Cell>
                  <DataTable.Cell>{item.points}</DataTable.Cell>
                </DataTable.Row>
              </TouchableOpacity>
            ))}
          </DataTable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Table;
