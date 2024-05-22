import React, {FC} from 'react';
import {View, ScrollView, Image} from 'react-native';

import {Screen, Stepper, Text} from '../../../components';
import styles from './styles';
import {Colors, Icons} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import {Matches, Overview, Statistics} from './components';

const PlayerScreen: FC = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = React.useState(0);
  const data = ['Overview', 'Statistics', 'Matches'];

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
            source={require('../../../assets/images/playerBanner.png')}
          />
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.avatarImage}
                source={require('../../../assets/images/player.png')}
              />
            </View>
            <View style={styles.mainHeadingContainer}>
              <Text style={styles.title}>Markus Rashford</Text>
              <View style={styles.headingContainer}>
                <Image
                  style={styles.iconImage}
                  source={require('../../../assets/images/ClubLogo.png')}
                />
                <Text style={styles.text}>Manchester United</Text>
                <Image
                  style={styles.iconImage}
                  source={require('../../../assets/images/CountryLogo.png')}
                />
                <Text style={styles.text}>England</Text>
              </View>
            </View>
          </View>

          <Stepper
            data={data}
            selectedItem={selectedItem}
            onSelect={setSelectedItem}
          />

          {selectedItem === 0 && <Overview />}
          {selectedItem === 1 && <Statistics />}
          {selectedItem === 2 && <Matches />}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default PlayerScreen;
