import React from 'react';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { ReminderScreen, SettingsScreen } from '../screens';

export default TabNavigator({
  Reminder: {
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialIcons
          name="event-note"
          size="24"
        />
      ),
    },
    screen: ReminderScreen,
  },
  Settings: {
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialIcons
          name="settings"
          size="24"
        />
      ),
    },
    screen: SettingsScreen,
  },
});
