import React, {FC, useRef} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';

import {Screen, Text} from '../../../components';
import styles from './styles';
import {Colors, Icons} from '../../../common';
import {useNavigation} from '@react-navigation/native';

import Video, {VideoRef} from 'react-native-video';
import {AvatarCard, IconTextCard} from '../../../components/Cards';
import {AvatarListData} from '../../../common/DummyData';

import teamOneFlag from '../../../assets/images/ClubLogo.png';
import teamTwoFlag from '../../../assets/images/ClubLogo1.png';

const StreamingScreen: FC = () => {
  const navigation = useNavigation();
  const videoRef = useRef<VideoRef>(null);
  const background = require('../../../assets/videos/background.mp4');

  return (
    <Screen>
      <View style={styles.backIcon}>
        <Icons.AntDesign
          name="arrowleft"
          color={Colors.primary}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View>
            <Video
              source={background}
              ref={videoRef}
              controls={true}
              style={styles.backgroundVideo}
            />
          </View>

          <View style={styles.ImageContainer}>
            <Image style={styles.leagueLogo} source={teamOneFlag} />
            <Text style={styles.titleScore}>2</Text>
            <Text>vs</Text>
            <Text style={styles.titleScore}>0</Text>
            <Image style={styles.leagueLogo} source={teamTwoFlag} />
          </View>

          <View style={{marginTop: 10}}>
            <Text style={styles.title}>
              Manchester United vs Bayern Munchen
            </Text>
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
            <View style={styles.contentHeader}>
              <AvatarCard
                avatarImage={AvatarListData.avatarImage}
                views={AvatarListData.views}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonContainerTwo}>
                  <Icons.Feather
                    name="share-2"
                    color={Colors.black}
                    size={15}
                  />
                  <Text style={styles.buttonTextTwo}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainerList}>
                  <Image
                    style={styles.iconImage}
                    source={require('../../../assets/images/listIcon.png')}
                  />
                </TouchableOpacity>
              </View>
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
        </View>
      </ScrollView>
    </Screen>
  );
};

export default StreamingScreen;
