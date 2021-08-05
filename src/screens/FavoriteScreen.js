import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Entypo from 'react-native-vector-icons/Entypo';

import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoriteScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>No favourite Product found!</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Your favorite',
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
      <Entypo name="heart-outlined" size={27} color={props.color} />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default FavoriteScreen;
