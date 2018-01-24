import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ReminderCard } from '../components';
import { IconButton } from '../components/Buttons';
import { NavigationBarIcon } from '../components/Icons';

const styles = {
  root: {
    flex: 1,
  },
  createReminderIcon: {
    width: '100%',
    position: 'absolute',
    bottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const ReminderScreen = () => {
  const { createReminderIcon, root } = styles;
  return (
    <View style={root}>
      <ScrollView>
        <ReminderCard />
        <ReminderCard />
      </ScrollView>
      <View style={createReminderIcon}>
        <IconButton
          iconName="add-circle-outline"
          iconColor="#5cb85c"
          iconSize={36}
        />
      </View>
    </View>
  );
};

ReminderScreen.navigationOptions = {
  headerRight: (
    <NavigationBarIcon
      name="settings"
      style={{ marginRight: 30 }}
    />
  ),
  title: 'Reminder',
};

export default ReminderScreen;
