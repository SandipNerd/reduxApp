import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {addToCart} from '../store/actions/products';

const {width} = Dimensions.get('window');

const ProductItem = props => {
  const currProductIsAdded = useSelector(state =>
    state.products.cartProducts.some(prod => prod.id === props.id),
  );

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(props.id));
  };

  return (
    <TouchableOpacity onPress={props.goToDetail}>
      <View style={styles.card}>
        <Image source={{uri: props.image}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{props.title}</Text>
          <Text numberOfLines={1} style={styles.description}>
            {props.description}
          </Text>
          <View style={styles.buy}>
            <Text style={styles.price}>${props.price}</Text>
            <MaterialIcons
              name={
                currProductIsAdded ? 'remove-shopping-cart' : 'shopping-cart'
              }
              color="#ff007f"
              size={25}
              onPress={addToCartHandler}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: width / 2,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  content: {
    padding: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff007f',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    color: '#aaaaaa',
  },
  buy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  addToCart: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addToCartText: {
    fontWeight: 'bold',
  },
});

export default ProductItem;
