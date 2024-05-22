import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';

interface Item {
  key: number;
  name: string;
  to: string;
  from: string;
  date: string;
  fee: string;
}

const TableData: React.FC = () => {
  const [items] = useState<Item[]>([
    {
      key: 1,
      name: 'Mohammed Kudus',
      to: 'West Ham United',
      from: 'Ajax Amsterdam',
      date: 'Sep 26, 2023',
      fee: '€45.00M',
    },
    {
      key: 2,
      name: 'Mohammed Kudus',
      to: 'West Ham United',
      from: 'Ajax Amsterdam',
      date: 'Sep 26, 2023',
      fee: '€45.00M',
    },
    {
      key: 3,
      name: 'Mohammed Kudus',
      to: 'West Ham United',
      from: 'Ajax Amsterdam',
      date: 'Sep 26, 2023',
      fee: '€45.00M',
    },
    {
      key: 4,
      name: 'Mohammed Kudus',
      to: 'West Ham United',
      from: 'Ajax Amsterdam',
      date: 'Sep 26, 2023',
      fee: '€45.00M',
    },
  ]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>From</DataTable.Title>
        <DataTable.Title>To</DataTable.Title>
        <DataTable.Title>Fee</DataTable.Title>
      </DataTable.Header>

      {items.map(item => (
        <TouchableOpacity onPress={() => {}} key={item.key}>
          <DataTable.Row>
            <DataTable.Cell>{item.date}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.from}</DataTable.Cell>
            <DataTable.Cell>{item.to}</DataTable.Cell>
            <DataTable.Cell>{item.fee}</DataTable.Cell>
          </DataTable.Row>
        </TouchableOpacity>
      ))}
    </DataTable>
  );
};

export default TableData;
