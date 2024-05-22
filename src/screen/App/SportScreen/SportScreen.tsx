import React, {FC} from 'react';
import {View, ScrollView, Image, FlatList} from 'react-native';

import {Screen, SeeAll, Text} from '../../../components';
import styles from './styles';
import {
  HotNewsCard,
  MatchCard,
  TrendingTransferCard,
} from '../../../components/Cards';
import {
  mostWatched,
  trendingTransfer,
  hotNews,
} from '../../../common/DummyData';
import {Routes} from '../../../common';
import {useNavigation} from '@react-navigation/native';

const SportScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.banner}
              source={require('../../../assets/images/Banner.png')}
            />
          </View>
          <Text style={styles.title}> Most Watched</Text>
          <FlatList
            data={mostWatched}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View key={item.id}>
                  <MatchCard
                    onPressTeamOne={() => {
                      // @ts-ignore
                      navigation.navigate(Routes.TeamScreen);
                    }}
                    onPressTeamTwo={() => {
                      // @ts-ignore
                      navigation.navigate(Routes.TeamScreen);
                    }}
                    text={item.text}
                    leagueText={item.leagueText}
                    team={item.team}
                    teamFlagOne={item.teamFlagOne}
                    teamFlagTwo={item.teamFlagTwo}
                    avatarImage={item.avatarImage}
                    views={item.views}
                  />
                </View>
              );
            }}
          />

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Trending Transfer ⚡️</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>

          <FlatList
            data={trendingTransfer}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View key={item.id}>
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
            <Text style={styles.title}>Hot News 🔥</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>

          <FlatList
            data={hotNews}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View key={item.id}>
                  <HotNewsCard
                    onPress={() => {
                      // @ts-ignore
                      navigation.navigate(Routes.NewsDetailScreen);
                    }}
                    date={item.date}
                    readTime={item.readTime}
                    title={item.title}
                    imageSource={item.imageSource}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SportScreen;
