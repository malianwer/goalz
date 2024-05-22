import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Icons} from '../../common';

interface TrendingViewCardProps {
  imageMainUrl: string;
  views: string;
  logoClub1: string;
  logoClub2: string;
}

const TrendingViewCard: React.FC<TrendingViewCardProps> = ({
  imageMainUrl,
  views,
  logoClub1,
  logoClub2,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.image}>
          <Image style={styles.insideImage} source={imageMainUrl} />
        </View>
        <View style={styles.content}>
          <View style={styles.ImageContainer}>
            <Image style={styles.leagueLogo} source={logoClub1} />
            <Text style={styles.vs}>vs</Text>
            <Image style={styles.leagueLogo} source={logoClub2} />
          </View>
          <View style={styles.justifyCenter}>
            <View style={styles.views}>
              <Icons.Ionicons
                name="eye-outline"
                color={Colors.gray}
                size={25}
              />
              <Text style={styles.viewsValue}>{views}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  justifyCenter: {
    justifyContent: 'center',
    marginLeft: 3,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 2,
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  insideImage: {
    width: 177,
    height: 200,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  image: {
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  ImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: Colors.lightgrey,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: 'space-around',
  },
  leagueLogo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightgrey,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewsValue: {
    color: Colors.black,
    fontSize: 15,
  },
  vs: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default TrendingViewCard;
