import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';

import CategoryItem from '../components/CategoryItem';
import CustomHeaderButton from '../components/CustomHeaderButton';
import NewHeaderButton from '../components/NewHeaderButton';

import Entypo from 'react-native-vector-icons/Entypo';

const CategoryScreen = props => {
  const categories = useSelector(state => state.category.category);

  const renderCategories = ({item}) => {
    return (
      <CategoryItem
        title={item.title}
        image={item.image}
        navigateTo={() => {
          props.navigation.navigate('home', {
            catId: item.id,
            title: item.title,
          });
        }}
      />
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderCategories}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    flex: 1,
    height: 5,
    backgroundColor: '#fff',
  },
});

export const screenOptions = navData => {
  return {
    headerTitle: 'M-Fashion',
    headerTitleAlign: 'center',
    tabBarIcon: props => <Entypo name="shop" size={25} color={props.color} />,
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={NewHeaderButton}>
        <Item
          title="add"
          iconName="add-shopping-cart"
          onPress={() => {
            navData.navigation.navigate('add');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoryScreen;
