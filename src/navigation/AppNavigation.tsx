import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';

import {Colors, Icons} from '../common';
import {StatisticsScreen, LiveScreen, CompetitionScreen} from '../screen/App';
import NewsNavigation from './NewsNavigation';
import TransferNavigation from './TransferNavigation';
import SportNavigation from './SportNavigation';

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: styles.tabBarStyles,
      }}>
      <Tabs.Screen
        name="Sport"
        component={SportNavigation}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Icons.MaterialIcons
                name="sports-cricket"
                size={size - 5}
                color={focused ? Colors.primary : Colors.grey}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Live Play"
        component={LiveScreen}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Icons.MaterialIcons
                name="live-tv"
                size={size - 5}
                color={focused ? Colors.primary : Colors.grey}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="News"
        component={NewsNavigation}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Icons.Entypo
                name="news"
                size={size - 5}
                color={focused ? Colors.primary : Colors.grey}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Icons.Ionicons
                name="stats-chart"
                size={size - 5}
                color={focused ? Colors.primary : Colors.grey}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Transfer"
        component={TransferNavigation}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Icons.Fontisto
                name="arrow-swap"
                size={size - 5}
                color={focused ? Colors.primary : Colors.grey}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Competition"
        component={CompetitionScreen}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Icons.MaterialCommunityIcons
                name="medal-outline"
                size={size - 5}
                color={focused ? Colors.primary : Colors.grey}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyles: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    position: 'absolute',
    paddingBottom: 5,
  },
});

export default AppNavigation;
