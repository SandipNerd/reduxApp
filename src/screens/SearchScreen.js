import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Feather from 'react-native-vector-icons/Feather';

import CustomHeaderButton from '../components/CustomHeaderButton';

const SearchScreen = props => {
  return (
    <View style={styles.screen}>
      <TextInput style={styles.input} placeholder="Search by product name" />
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Explore',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="menuunfold"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    tabBarIcon: props => (
      <Feather name="search" size={25} color={props.color} />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ff007f',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;
