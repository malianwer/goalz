import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Icons} from '../../common';

interface AvatarCardProps {
  avatarImage: any;
  views: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({avatarImage, views}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    padding: 10,
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

export default AvatarCard;
