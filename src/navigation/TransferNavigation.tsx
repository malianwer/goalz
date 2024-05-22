import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../common';

import {NewsDetailScreen, PlayerScreen, TransferScreen} from '../screen/App';

const Stack = createStackNavigator();

const TransferNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.TransferScreen} component={TransferScreen} />
      <Stack.Screen
        name={Routes.NewsDetailScreen}
        component={NewsDetailScreen}
      />
      <Stack.Screen name={Routes.PlayerScreen} component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export default TransferNavigation;
