import React, {FC} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';

import styles from '../styles';
import {SeeAll, Text} from '../../../../components';
import {FlatList} from 'react-native';
import {AvatarListData, UpComingData} from '../../../../common/DummyData';
import {
  AvatarCard,
  IconTextCard,
  UpComingMatchCard,
} from '../../../../components/Cards';
import {Colors, Icons, Routes} from '../../../../common';

import teamOneFlag from '../../../../assets/images/ClubLogo.png';
import teamTwoFlag from '../../../../assets/images/ClubLogo1.png';
import {useNavigation} from '@react-navigation/native';

const Live: FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/live.png')}
          />
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate(Routes.StreamingScreen);
            }}
            style={styles.iconContainer}>
            <Icons.AntDesign name="play" color={Colors.white} size={60} />
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 20}}>
          <View style={styles.contentHeader}>
            <View style={styles.ImageContainer}>
              <View style={styles.directionTeams}>
                <Image style={styles.leagueLogo} source={teamOneFlag} />
                <Text style={styles.titleScore}>2</Text>
              </View>
              <Text>vs</Text>
              <View style={styles.directionTeams}>
                <Text style={styles.titleScore}>0</Text>
                <Image style={styles.leagueLogo} source={teamTwoFlag} />
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={styles.buttonContainerTwo}>
                <Icons.Feather name="share-2" color={Colors.black} size={15} />
                <Text style={styles.buttonTextTwo}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainerList}>
                <Image
                  style={styles.iconImage}
                  source={require('../../../../assets/images/listIcon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.title}>Manchester United vs Bayern Munchen</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Champions League</Text>
            <Text style={styles.text}>Fase Group</Text>
            <Text style={styles.text}>Group A</Text>
            <Text style={styles.text}>Match 1 out of 6</Text>
          </View>

          <Text>
            The #Champions League group stage brings together Bayern Munich vs
            Manchester United at the Allianz Arena, Thursday (21/09/23).
          </Text>
          <View style={styles.avatarContainer}>
            <AvatarCard
              avatarImage={AvatarListData.avatarImage}
              views={AvatarListData.views}
            />
          </View>
          <View style={styles.flexDirection}>
            <IconTextCard
              icon={
                <Icons.MaterialCommunityIcons
                  name="comment-processing-outline"
                  size={20}
                />
              }
              text="Comments"
              value="1.2K"
            />
            <IconTextCard
              icon={<Icons.Feather name="thumbs-up" size={20} />}
              text="Likes"
              value="534"
            />
            <IconTextCard
              icon={<Icons.Feather name="thumbs-down" size={20} />}
              text="Dislikes"
              value="133"
            />
          </View>
        </View>

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
      </View>
    </ScrollView>
  );
};

export default Live;
