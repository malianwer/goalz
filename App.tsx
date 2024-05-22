import 'react-native-gesture-handler';

import React, {FC, useState, useEffect} from 'react';
// import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import AppNavigation from './src/navigation/AppNavigation';

const App: FC = () => {
  // const [token, setToken] = useState<string | null>(null);

  // useEffect(() => {
  //   // Assume you have a function to check if a token is available
  //   const checkToken = () => {
  //     const userToken = ''; // Retrieve the token from storage or context
  //     if (userToken) {
  //       setToken(userToken);
  //     }
  //   };

  //   checkToken();
  // }, []);
  return (
    <NavigationContainer>
      {/* {token ? <AppNavigation /> : <AuthNavigation />} */}

      <AppNavigation />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });

export default App;
