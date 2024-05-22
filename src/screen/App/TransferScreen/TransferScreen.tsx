import React, {FC, useState} from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';

import {Screen, SeeAll, Text} from '../../../components';
import styles from './styles';
import {TrendingTransferCard, TrendyNewsCard} from '../../../components/Cards';
import {DataTable} from 'react-native-paper';
import SearchInput from '../../../components/SearchInput';
import {trendingTransfer, trendyNewsData} from '../../../common/DummyData';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../common';

interface Item {
  key: number;
  name: string;
  to: string;
  from: string;
  date: string;
  fee: string;
}

const TransferScreen: FC = () => {
  const navigation = useNavigation();
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
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Trending Transfer Deals ⚡️</Text>
          <FlatList
            data={trendingTransfer}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 5}}>
                  <TrendingTransferCard
                    onPress={() => {
                      // @ts-ignore
                      navigation.navigate(Routes.PlayerScreen);
                    }}
                    playerName={item.name}
                    position={item.position}
                    age={item.age}
                    price={item.price}
                    image={item.image}
                    teamOneImage={item.teamOneImage}
                    teamTwoImage={item.teamTwoImage}
                    CountryLogo={item.countryLogo}
                  />
                </View>
              );
            }}
          />

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Transfer News</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>
          <FlatList
            data={trendyNewsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 15}}>
                  <TrendyNewsCard
                    text={item.text}
                    date={item.date}
                    title={item.title}
                    category={item.category}
                    readTime={item.readTime}
                    imageUrl={item.imageUrl}
                    newsChannelImg={item.newsChannelImg}
                    onPress={() => {
                      // @ts-ignore
                      navigation.navigate(Routes.NewsDetailScreen);
                    }}
                  />
                </View>
              );
            }}
          />
          <Text style={styles.title}>Transfers Deals</Text>
          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.groupHeading}>
                Transfers Deals in 2023/24
              </Text>
              <View style={styles.w45}>
                <SearchInput placeholder="Search" />
              </View>
            </View>
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
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default TransferScreen;
