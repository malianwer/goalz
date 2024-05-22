import React, {FC} from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import {Screen, SeeAll, Text} from '../../../components';
import styles from './styles';
import {
  BroadcasterCard,
  TrendingViewCard,
  UpComingMatchCard,
} from '../../../components/Cards';

import {
  UpComingData,
  top10TreandingViews,
  boardcastData,
} from '../../../common/DummyData';

const LiveScreen: FC = () => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}> Top 10 Trending Views 🔥</Text>
          </View>

          <FlatList
            data={top10TreandingViews}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 15}}>
                  <TrendingViewCard
                    views={item.views}
                    imageMainUrl={item.mainImage}
                    logoClub1={item.logoClubOne}
                    logoClub2={item.logoClubTwo}
                  />
                </View>
              );
            }}
          />

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Broadcaster</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>
          <FlatList
            data={boardcastData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View>
                  <BroadcasterCard title={item.title} imageUrl={item.img} />
                </View>
              );
            }}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Upcoming Match</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>
          <FlatList
            data={UpComingData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View>
                  <UpComingMatchCard
                    text={item.text}
                    leagueText={item.leagueText}
                    teamFlagOne={item.teamFlagOne}
                    teamFlagTwo={item.teamFlagTwo}
                    team={item.team}
                    dateAndTime={item.dataAndTime}
                  />
                </View>
              );
            }}
          />

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Today's Match</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>
          <FlatList
            data={UpComingData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View>
                  <UpComingMatchCard
                    text={item.text}
                    leagueText={item.leagueText}
                    teamFlagOne={item.teamFlagOne}
                    teamFlagTwo={item.teamFlagTwo}
                    team={item.team}
                    dateAndTime={item.dataAndTime}
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

export default LiveScreen;
