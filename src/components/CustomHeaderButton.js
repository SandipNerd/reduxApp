import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';

import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      IconComponent={AntDesign}
      iconSize={25}
      color="#ff007f"
      {...props}
    />
  );
};

export default CustomHeaderButton;
