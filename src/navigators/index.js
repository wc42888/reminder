import React from 'react';
import { StackNavigator } from 'react-navigation';
import { NavigationBarIcon } from '../components/Icons';
import { ReminderScreen, SettingsScreen } from '../screens';

export default StackNavigator({
  Reminder: {
    screen: ReminderScreen,
  },
  Settings: {
    navigationOptions: {
      Header: () => (
        <NavigationBarIcon
          name="settings"
        />
      ),
    },
    screen: SettingsScreen,
  },
});
