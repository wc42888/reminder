import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  root: {
    flexDirection: 'row',
    height: 32,
  },
  textArea: {
    flex: 5,
  },
  backActionIcon: {
    flex: 2,
  },
};

const ReminderCard = () => {
  const {
    root,
    backActionIcon,
    textArea,
  } = styles;
  return (
    <View style={root}>
      <View style={textArea}>
        <Text>
          text area
        </Text>
      </View>

      <View style={backActionIcon}>
        <Text>
          buttons
        </Text>
      </View>

    </View>
  );
};

export default ReminderCard;
