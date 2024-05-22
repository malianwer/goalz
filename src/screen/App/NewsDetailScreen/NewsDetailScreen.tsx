import React, {FC} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';

import {Screen, Text} from '../../../components';
import styles from './styles';
import {Colors, Icons} from '../../../common';
import {useNavigation} from '@react-navigation/native';

const NewsDetailScreen: FC = () => {
  const navigation = useNavigation();
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
          <Image
            style={styles.coverImage}
            source={require('../../../assets/images/coverImageNew.png')}
          />
          <Text style={styles.title}>
            Jadon Sancho Reluctant to Apologize to Erik ten Hag, Don't Expect
            the Cold War at MU to End
          </Text>
          <View style={styles.headingContainer}>
            <View style={styles.mainContainer}>
              <Image
                style={styles.authorImage}
                source={require('../../../assets/images/Media.png')}
              />
              <View style={styles.authorContainer}>
                <Text style={styles.author}>IDN Times by Thomas Muller</Text>
                <View style={styles.infoContainer}>
                  <Text style={styles.category}>Football</Text>
                  <Text style={styles.date}>28 Sep, 2023</Text>
                  <Text style={styles.time}>4 min read</Text>
                </View>
              </View>
            </View>
            <View style={styles.iconMainContainer}>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  style={styles.iconImage}
                  source={require('../../../assets/images/shareIcon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  style={styles.iconImage}
                  source={require('../../../assets/images/wishlistIcon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  style={styles.iconImage}
                  source={require('../../../assets/images/listIcon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.description}>
            Jadon Sancho was involved in a public spat with manager Erik ten Hag
            earlier this month, resulting in the winger being dropped from the
            first-team squad. The Manchester United boss initially said the
            23-year-old's training level was not up to standard, angering Sancho
            and accusing the former Ajax manager of making him a 'scapegoat' for
            the team's poor start to the season.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default NewsDetailScreen;
