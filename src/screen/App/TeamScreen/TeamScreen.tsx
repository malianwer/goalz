import React, {FC} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';

import {Screen, Stepper, Text} from '../../../components';
import styles from './styles';
import {Colors, Icons} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import {
  About,
  Collection,
  Live,
  Match,
  Player,
  Statistic,
  Transfer,
} from './components';

const TeamScreen: FC = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = React.useState(0);
  const data = [
    'Live',
    'Match',
    'Collection',
    'Player',
    'Statistic',
    'Transfer',
    'About',
  ];

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
            source={require('../../../assets/images/manchesterBanner.png')}
          />
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.avatarImage}
                source={require('../../../assets/images/manchester.png')}
              />
            </View>
            <View style={styles.mainHeadingContainer}>
              <Text style={styles.title}>Manchester United</Text>
              <View style={styles.headingContainer}>
                <Text style={styles.textPoints}>63.0M</Text>
                <Text style={styles.text}>Followers</Text>
                <Text style={styles.textPoints}>27.7K</Text>
                <Text style={styles.text}>Collections</Text>
              </View>
              <View style={styles.flexDirection}>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Icons.Feather
                    name="thumbs-up"
                    color={Colors.white}
                    size={15}
                  />
                  <Text style={styles.buttonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerTwo}>
                  <Icons.Feather
                    name="share-2"
                    color={Colors.black}
                    size={15}
                  />
                  <Text style={styles.buttonTextTwo}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Stepper
            data={data}
            selectedItem={selectedItem}
            onSelect={setSelectedItem}
          />
          {selectedItem === 0 && <Live />}
          {selectedItem === 1 && <Match />}
          {selectedItem === 2 && <Collection />}
          {selectedItem === 3 && <Player />}
          {selectedItem === 4 && <Statistic />}
          {selectedItem === 5 && <Transfer />}
          {selectedItem === 6 && <About />}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default TeamScreen;
