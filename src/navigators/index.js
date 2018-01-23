import React from 'react';
import { TabNavigator } from 'react-navigation';
import { NavigationBarIcon } from '../components/Icons';
import { ReminderScreen, SettingsScreen } from '../screens';

export default TabNavigator({
  Reminder: {
    navigationOptions: {
      tabBarIcon: () => (
        <NavigationBarIcon
          name="event-note"
        />
      ),
    },
    screen: ReminderScreen,
  },
  Settings: {
    navigationOptions: {
      tabBarIcon: () => (
        <NavigationBarIcon
          name="settings"
        />
      ),
    },
    screen: SettingsScreen,
  },
});
