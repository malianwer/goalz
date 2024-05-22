import React, {FC} from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import styles from '../styles';
import {MatchCard} from '../../../../components/Cards';
import {SeeAll, Text} from '../../../../components';
import {mostWatched} from '../../../../common/DummyData';

const Matchs: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Tuesday 3 October 2023</Text>
          <SeeAll title="See All" onPress={() => {}} />
        </View>
        <FlatList
          data={mostWatched}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => {
            return (
              <View style={{marginRight: 15}}>
                <MatchCard
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
          <Text style={styles.title}>Thursday 21 September 2023</Text>
          <SeeAll title="See All" onPress={() => {}} />
        </View>
        <FlatList
          data={mostWatched}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => {
            return (
              <View style={{marginRight: 15}}>
                <MatchCard
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
      </View>
    </ScrollView>
  );
};

export default Matchs;
