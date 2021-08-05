import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthenticateButton from '../components/AuthenticateButton';
import SignInButton from '../components/SignInButton';
import {setUserData} from '../store/actions/users';

const LoginScreen = props => {
  const [user, setUser] = useState();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(async () => {
    configureGoogleSignIn();
    await getCurrentUser();
  }, []);

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        '744963995603-81aq1ikl4ch65lufc8p2b11l5sci052v.apps.googleusercontent.com',
      offlineAccess: false,
    });
  };

  const getCurrentUser = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      //   this.setState({userInfo, error: null});
    } catch (error) {
      const errorMessage =
        error.code === statusCodes.SIGN_IN_REQUIRED
          ? 'Please sign in :)'
          : error.message;
      //   this.setState({
      //     error: new Error(errorMessage),
      //   });
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        await AsyncStorage.setItem('userId', JSON.stringify(userInfo.user.id));
        dispatch(setUserData(userInfo.user));
        props.navigation.navigate('drawer');
      }
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('failed to Sign in');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('Signing in...');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
        //   this.setState({
        //     error,
        //   });
      }
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar translucent={false} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasP-6QV87eGLRntKjyyILMAEIym1OpZf871_xxo59HKrBAgjQkQAfmdQVI4IuuO_yOGk3u1EW0_uAiw&usqp=CAU',
          }}
        />
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>
          Log in to your existing account of M-Fashion
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or Phone number"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#000"
        />
        <View style={styles.authenticateContainer}>
          <AuthenticateButton title="SIGN IN" />
        </View>
      </View>
      <Text style={styles.otherText}>Or connect using</Text>
      <View style={styles.SignInButtonContainer}>
        <GoogleSigninButton
          style={{width: 190, height: 60}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signIn}
          //   disabled={this.state.isSigninInProgress}
        />
        <SignInButton
          title="facebook"
          iconName="facebook-square"
          iconColor="#3b5998"
          backColor="#fff"
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
  },
  welcomeText: {
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  subText: {
    color: '#000',
    fontWeight: 'bold',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 20,
    borderColor: '#ff007f',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  authenticateContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  otherText: {
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  SignInButtonContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  signUpText: {
    color: '#ff007f',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});

export default LoginScreen;
