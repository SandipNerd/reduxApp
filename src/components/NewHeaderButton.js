import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NewHeaderButton = props => {
  return (
    <HeaderButton
      IconComponent={MaterialIcons}
      iconSize={30}
      color="#ff007f"
      {...props}
    />
  );
};

export default NewHeaderButton;
