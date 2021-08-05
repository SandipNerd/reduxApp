import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';

const CartScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>You have no products added to your cart</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Your Cart',
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

export default CartScreen;
