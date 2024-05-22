import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common';

interface TrendingTransferCardProps {
  playerName: string;
  position: string;
  age: string;
  price: string;
  image: string;
  teamOneImage: string;
  teamTwoImage: string;
  CountryLogo: string;
  onPress: () => void;
}

const TrendingTransferCard: React.FC<TrendingTransferCardProps> = ({
  playerName,
  position,
  age,
  price,
  image,
  teamOneImage,
  teamTwoImage,
  CountryLogo,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{playerName}</Text>
        <View style={styles.infoContainer}>
          <Image
            source={require('../../assets/images/CountryLogo.png')}
            style={styles.clubLogoCountry}
          />
          <Text style={styles.info}>
            {position} • {age} years old
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.clubs}>
            <Image source={teamOneImage} style={styles.clubLogo} />
            <Image
              source={require('../../assets/images/arrow-right.png')}
              style={styles.clubLogoArrow}
            />
            <Image source={teamTwoImage} style={styles.clubLogo} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 3,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    width: '95%',
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: 110,
    height: 150,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 10,
  },
  details: {
    flex: 1,
    width: 200,
    height: 150,
    justifyContent: 'center',
  },
  info: {
    fontSize: 13,
    color: Colors.gray,
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.black,
  },
  clubs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  clubLogo: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  clubLogoArrow: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  clubLogoCountry: {
    width: 20,
    height: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TrendingTransferCard;
