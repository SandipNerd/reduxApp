import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import ProductItem from '../components/ProductItem';

const CartScreen = props => {
  const addToCartProducts = useSelector(state => state.products.cartProducts);

  const renderProducts = ({item}) => {
    return (
      <ProductItem
        title={item.title}
        image={item.image}
        price={item.price}
        description={item.description}
        goToDetail={() => {
          props.navigation.navigate('detail', {productId: item.id});
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={addToCartProducts}
        keyExtractor={item => item.id}
        renderItem={renderProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
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
    backgroundColor: '#fff',
  },
});

export default CartScreen;
