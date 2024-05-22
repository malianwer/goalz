import React, {FC, useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
// import useAuth from '../../../hooks/useAuth';
// import {getLanguage, getToken, getUser} from '../../../utils/storage';
// import {User} from '../../../types';
import {Routes} from '../../../common';
import {Screen, Text} from '../../../components';

const SplashScreen: FC = () => {
  const navigation = useNavigation();
  // const {login} = useAuth();

  useEffect(() => {
    (async () => {
      // const token: string | null | undefined = await getToken();
      // const user: User | null | undefined = await getUser();
      // if (token) {
      //   await login({token, data: user});
      // } else {
      setTimeout(() => {
        // @ts-ignore
        navigation.navigate(Routes.LoginScreen);
      }, 3000);
      // }
    })();
  }, []);

  return (
    <Screen>
      <View style={styles.splash}>
        <Image
          style={styles.container}
          source={require('../../../assets/images/logo.jpeg')}
        />
      </View>
    </Screen>
  );
};

export default SplashScreen;
