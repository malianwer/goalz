import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Icons} from '../../common';

interface MatchCardProps {
  text: string;
  leagueText: string;
  team: any;
  teamFlagOne: string;
  teamFlagTwo: string;
  avatarImage: any;
  views: string;
  onPressTeamTwo: () => void;
  onPressTeamOne: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({
  text,
  leagueText,
  team,
  teamFlagOne,
  teamFlagTwo,
  avatarImage,
  views,
  onPressTeamOne,
  onPressTeamTwo,
}) => {
  const sortedTeams = team.sort((a, b) => b.score - a.score);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <View style={styles.ImgContainer}>
          <View style={styles.ImageContainer}>
            <TouchableOpacity onPress={onPressTeamOne}>
              <Image style={styles.leagueLogo} source={teamFlagOne} />
            </TouchableOpacity>
            <Text>vs</Text>
            <TouchableOpacity onPress={onPressTeamTwo}>
              <Image style={styles.leagueLogo} source={teamFlagTwo} />
            </TouchableOpacity>
          </View>
          <View>
            <Icons.AntDesign name="staro" color={Colors.gray} size={25} />
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.infoContainer}>
            <Image
              style={styles.leagueLogoOne}
              source={require('../../assets/images/LeaguesLogo.png')}
            />
            <Text style={styles.source}>{text}</Text>
          </View>
          <Text style={styles.leagueText}>{leagueText}'</Text>
        </View>
        <View style={styles.mainContainer}>
          {sortedTeams.map((team, index) => (
            <View key={index} style={styles.teamScore}>
              <Text
                style={[
                  styles.teamName,
                  {color: index === 0 ? 'black' : 'grey'},
                ]}>
                {team.name}
              </Text>
              <View style={styles.scoreContainer}>
                {index === 0 && ( // Show icon only for the team with the highest score
                  <Icons.MaterialIcons
                    name="arrow-right"
                    color="black"
                    size={25}
                  />
                )}
                <Text
                  style={[
                    styles.teamName,
                    {color: index === 0 ? 'black' : 'grey'},
                  ]}>
                  {team.score}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.footer}></View>
        <View style={styles.ViewContainer}>
          <View style={styles.viewInsideContainer}>
            <View style={{flexDirection: 'row'}}>
              {avatarImage.map((source, index) => (
                <Image
                  key={index}
                  source={source}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: index === 0 ? 0 : -10,
                  }}
                />
              ))}
            </View>
            <View style={styles.views}>
              <Icons.Ionicons
                name="eye-outline"
                color={Colors.gray}
                size={20}
              />
              <Text style={styles.viewsValue}>{views}</Text>
            </View>
          </View>
          <View>
            <Icons.Ionicons name="tv-outline" color={Colors.gray} size={25} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  source: {
    fontSize: 12,
    marginRight: 10,
    color: Colors.gray,
  },
  category: {
    fontSize: 12,
    marginRight: 10,
    color: Colors.primary,
  },
  date: {
    fontSize: 12,
    color: Colors.darkGreen,
    backgroundColor: Colors.green,
    padding: 5,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  leagueText: {
    fontSize: 12,
    color: Colors.darkGreen,
    backgroundColor: Colors.green,
    paddingHorizontal: 10,
    borderRadius: 15,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leagueLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  leagueLogoOne: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  ImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: Colors.lightgrey,
    paddingVertical: 10,
    borderRadius: 25,
  },
  ImgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  teamScore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewInsideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamName: {
    fontWeight: 'bold',
  },
  mainContainer: {
    marginVertical: 10,
  },
  footer: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
  },
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightgrey,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginLeft: -10,
    paddingVertical: 7,
  },
  viewsValue: {
    marginLeft: 5,
    color: Colors.black,
  },
});

export default MatchCard;
