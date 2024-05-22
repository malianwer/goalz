import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../common';
import {
  LoginScreen,
  SignUpScreen,
  SplashScreen,
  OtpScreen,
} from '../screen/Auth';
// import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();

const AuthNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={Routes.OtpScreen} component={OtpScreen} />
      {/* <Stack.Screen name={Routes.SportScreen} component={AppNavigation} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
