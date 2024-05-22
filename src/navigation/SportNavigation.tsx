import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../common';

import {
  NewsDetailScreen,
  PlayerScreen,
  SportScreen,
  StreamingScreen,
  TeamScreen,
} from '../screen/App';

const Stack = createStackNavigator();

const SportNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.SportScreen} component={SportScreen} />
      <Stack.Screen name={Routes.PlayerScreen} component={PlayerScreen} />
      <Stack.Screen name={Routes.TeamScreen} component={TeamScreen} />
      <Stack.Screen name={Routes.StreamingScreen} component={StreamingScreen} />

      <Stack.Screen
        name={Routes.NewsDetailScreen}
        component={NewsDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default SportNavigation;
