import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import customPropTypes from '../../config/customPropTypes';

const NavigationBarIcon = ({ name, style }) => (
  <MaterialIcons
    name={name}
    size={24}
    style={style}
  />
);

NavigationBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  style: customPropTypes.style,
};

NavigationBarIcon.defaultProps = {
  style: {},
};

export default NavigationBarIcon;
