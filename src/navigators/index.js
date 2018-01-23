import { TabNavigator } from 'react-navigation';
import { ReminderScreen, SettingsScreen } from '../screens';

export default TabNavigator({
  Reminder: {
    screen: ReminderScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});
