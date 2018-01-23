import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

const NavigationBarIcon = ({ name, color }) => (
  <MaterialIcons
    name={name}
    color={color}
    size={24}
  />
);

NavigationBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

NavigationBarIcon.defaultProps = {
  color: '',
};

export default NavigationBarIcon;
