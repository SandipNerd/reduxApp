import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import ProductItem from '../components/ProductItem';

const SearchScreen = props => {
  const [searchText, setSearchText] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  const availableProducts = useSelector(state => state.products.products);

  const filterProduct = prod => {
    let data = availableProducts.filter(item =>
      item.title.toUpperCase().includes(prod.toUpperCase()),
    );
    setFilteredProducts(data);
    setSearchText(prod);
  };

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
      <TextInput
        style={styles.input}
        value={searchText}
        placeholder="Search by product name"
        onChangeText={text => {
          filterProduct(text);
        }}
      />
      <FlatList
        data={filteredProducts}
        key={item => item.id}
        renderItem={renderProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Searched products not found!</Text>
          </View>
        )}
      />
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
  },
  input: {
    height: 45,
    borderColor: '#ff007f',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
