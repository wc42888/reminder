import React from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'settings',
  }

  render() {
    return (
      <View>
        <Text>
          SettingsScreen
        </Text>
      </View>
    );
  }
}

// const SettingsScreen = () => {
//   return (
//     <View>
//       <Text>
//         SettingsScreen
//       </Text>
//     </View>
//   );
// };

export default SettingsScreen;
