import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ProductItem = props => {
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
            <TouchableNativeFeedback>
              <View style={styles.addToCart}>
                <Text style={styles.addToCartText}>Add to cart</Text>
              </View>
            </TouchableNativeFeedback>
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
    backgroundColor: '#ff007f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductItem;
