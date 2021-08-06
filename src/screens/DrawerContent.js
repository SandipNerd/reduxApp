import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DrawerContent = props => {
  const userInfo = useSelector(state => state.users.users);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      props.navigation.navigate('login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Image
              style={styles.image}
              source={{
                uri: userInfo.photo,
              }}
            />
            <View style={styles.user}>
              <Text style={styles.name}>{userInfo.name}</Text>
              <Text style={styles.email}>{userInfo.email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.navigationContainer}>
          <DrawerItem
            icon={({color, size}) => (
              <Entypo name="shop" color={color} size={size} />
            )}
            label="M-Fashion"
            activeTintColor={props.color}
            onPress={() => {
              props.navigation.navigate('homestack');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <AntDesign name="shoppingcart" color={color} size={size} />
            )}
            label="Your cart"
            activeTintColor="#ff007f"
            onPress={() => {
              props.navigation.navigate('Your cart');
            }}
          />
        </View>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          icon={({color, size}) => (
            <Entypo name="log-out" color={color} size={size} />
          )}
          label="Sign out"
          onPress={signOut}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logout: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  signOutText: {
    fontSize: 18,
    color: '#ff007f',
    fontWeight: 'bold',
  },
  drawerContent: {},
  userInfoSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  user: {
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: '#ff007f',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  navigationContainer: {
    paddingVertical: 20,
  },
  email: {
    fontSize: 13,
    paddingVertical: 5,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: '#aaaaaa',
  },
});

export default DrawerContent;
