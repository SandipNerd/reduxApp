import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import Entypo from 'react-native-vector-icons/Entypo';
import {toggleFavorite} from '../store/actions/products';

const DetailScreen = props => {
  const availableProducts = useSelector(state => state.products.products);

  const {productId} = props.route.params;

  const dispatch = useDispatch();

  const selectedProduct = availableProducts.filter(
    prod => prod.id === productId,
  );
  const currProdIsFav = useSelector(state =>
    state.products.favoriteProducts.some(prod => prod.id === productId),
  );

  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(selectedProduct[0].id));
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.image}
        source={{uri: selectedProduct[0].image}}
        resizeMode="cover">
        <View style={styles.imageHeader}>
          <Entypo
            name="cross"
            size={30}
            color="#fff"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <View style={styles.icon}>
            <Entypo
              name={currProdIsFav ? 'heart' : 'heart-outlined'}
              size={30}
              color="#ff007f"
              onPress={toggleFavoriteHandler}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{selectedProduct[0].title}</Text>
          <Text style={styles.price}>${selectedProduct[0].price}</Text>
        </View>
        <Text>{selectedProduct[0].description}</Text>
      </View>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageHeader: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff007f',
  },
  icon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
