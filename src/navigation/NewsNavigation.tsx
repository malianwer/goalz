import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../common';

import {NewsDetailScreen, NewsScreen} from '../screen/App';

const Stack = createStackNavigator();

const NewsNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.NewsScreen} component={NewsScreen} />
      <Stack.Screen
        name={Routes.NewsDetailScreen}
        component={NewsDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigation;
