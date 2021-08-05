import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import CategoryScreen, {
  screenOptions as categoryScreenOptions,
} from '../screens/CategoryScreen';
import HomeScreen, {
  screenOptions as homeScreenOptions,
} from '../screens/HomeScreen';
import DetailScreen, {
  screenOptions as detailScreenOptions,
} from '../screens/DetailScreen';
import FavoriteScreen, {
  screenOptions as favoriteScreenOptions,
} from '../screens/FavoriteScreen';
import SearchScreen, {
  screenOptions as searchScreenOptions,
} from '../screens/SearchScreen';
import ProfileScreen, {
  screenOptions as profileScreenOptions,
} from '../screens/ProfileScreen';
import CartScreen, {
  screenOptions as cartScreenOptions,
} from '../screens/CartScreen';
import AddProductScreen, {
  screenOptions as addProductScreenOptions,
} from '../screens/AddProductScreen';
import DrawerContent from '../screens/DrawerContent';

import LoginScreen from '../screens/LoginScreen';

const AuthenticateStack = createStackNavigator();

export const AuthenticateStackNavigator = () => {
  return (
    <AuthenticateStack.Navigator>
      <AuthenticateStack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthenticateStack.Screen
        name="drawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
    </AuthenticateStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerTintColor: '#ff007f',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#ff007f',
        tabBarHideOnKeyboard: true,
        headerShown: true,
      }}>
      <BottomTab.Screen
        name="homestack"
        component={CategoryScreen}
        options={categoryScreenOptions}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreen}
        options={searchScreenOptions}
      />
      <BottomTab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={favoriteScreenOptions}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={profileScreenOptions}
      />
    </BottomTab.Navigator>
  );
};

const FashionStack = createStackNavigator();

const FashionStackNavigator = () => {
  return (
    <FashionStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ff007f',
        headerShown: false,
      }}
      initialRouteName="category">
      <FashionStack.Screen
        name="category"
        component={BottomTabNavigator}
        options={categoryScreenOptions}
      />
      <FashionStack.Screen
        name="home"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <FashionStack.Screen
        name="detail"
        component={DetailScreen}
        options={detailScreenOptions}
      />
      <FashionStack.Screen
        name="add"
        component={AddProductScreen}
        options={addProductScreenOptions}
      />
    </FashionStack.Navigator>
  );
};

const CartStack = createStackNavigator();

const CartStackNavigator = () => {
  return (
    <CartStack.Navigator screenOptions={{headerTintColor: '#ff007f'}}>
      <CartStack.Screen
        name="cart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </CartStack.Navigator>
  );
};

const renderDrawerContent = () => {};

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="category"
      screenOptions={{headerShown: false, drawerActiveTintColor: '#ff007f'}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="M-Fashion" component={FashionStackNavigator} />
      <Drawer.Screen name="Your cart" component={CartStackNavigator} />
    </Drawer.Navigator>
  );
};

// export default MyDrawer;
