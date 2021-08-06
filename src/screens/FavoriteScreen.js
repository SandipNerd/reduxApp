import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import ProductItem from '../components/ProductItem';

const FavoriteScreen = props => {
  const favoriteProducts = useSelector(
    state => state.products.favoriteProducts,
  );
  console.log(favoriteProducts);

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

  if (favoriteProducts.length <= 0) {
    return (
      <View style={styles.center}>
        <Text>No favorite products to display</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteProducts}
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
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default FavoriteScreen;
