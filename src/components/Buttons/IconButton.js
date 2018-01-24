import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

const IconButton = ({ iconName, iconColor, iconSize, onPress }) => {
  return (
    <TouchableOpacity>
      <MaterialIcons
        name={iconName}
        color={iconColor}
        size={iconSize}
        onPress={onPress}
      />
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  iconColor: null,
  iconSize: null,
};


export default IconButton;
