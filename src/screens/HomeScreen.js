import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../components/ProductItem';

const HomeScreen = props => {
  const {catId, title} = props.route.params;
  const allProducts = useSelector(state => state.products.products);

  const availableProducts = allProducts.filter(
    prod => prod.categoryId === catId,
  );

  useEffect(() => {
    props.navigation.setParams({title: title});
  }, [title]);

  const renderProducts = ({item}) => {
    return (
      <ProductItem
        id={item.id}
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
        keyExtractor={item => item.id}
        data={availableProducts}
        renderItem={renderProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const screenOptions = navData => {
  const {title} = navData.route.params ? navData.route.params : null;
  return {
    headerTitle: title,
    headerShown: true,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
