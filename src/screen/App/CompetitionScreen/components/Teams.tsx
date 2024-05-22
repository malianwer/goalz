import React, {FC} from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import styles from '../styles';
import {TeamCard} from '../../../../components/Cards';
import img from '../../../../assets/images/ClubLogo.png';
import {teamsFlag} from '../../../../common/DummyData';

const Teams: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <FlatList
          data={teamsFlag}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => {
            return (
              <View key={item.id} style={{marginRight: 15}}>
                <TeamCard
                  title={item.name}
                  imageUrl={item.image}
                  text={item.text}
                  imageUrlOne={item.imageUrlOne}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Teams;
