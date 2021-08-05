/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import usersReducer from './src/store/reducers/users';

import {
  MyDrawer,
  AuthenticateStackNavigator,
} from './src/navigation/AppNavigator';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="rgba(0,0,0,0)"
      />
      <Provider store={store}>
        <AuthenticateStackNavigator />
      </Provider>
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
};

// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View, Alert, Button} from 'react-native';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// // import type {User} from '@react-native-google-signin/google-signin';
// import config from './config'; // see docs/CONTRIBUTING.md for details
// import {TokenClearingView} from './TokenClearingView';

// // type ErrorWithCode = Error & {code?: string};

// // type State = {
// //   error: ?ErrorWithCode,
// //   userInfo: ?User,
// // };

// class App extends Component {
//   state = {
//     userInfo: null,
//     error: null,
//   };

//   async componentDidMount() {
//     this._configureGoogleSignIn();
//     await this._getCurrentUser();
//   }

//   _configureGoogleSignIn() {
//     GoogleSignin.configure({
//       webClientId: config.webClientId,
//       offlineAccess: false,
//     });
//   }

//   async _getCurrentUser() {
//     try {
//       const userInfo = await GoogleSignin.signInSilently();
//       this.setState({userInfo, error: null});
//     } catch (error) {
//       const errorMessage =
//         error.code === statusCodes.SIGN_IN_REQUIRED
//           ? 'Please sign in :)'
//           : error.message;
//       this.setState({
//         error: new Error(errorMessage),
//       });
//     }
//   }

//   render() {
//     const {userInfo} = this.state;

//     const body = userInfo
//       ? this.renderUserInfo(userInfo)
//       : this.renderSignInButton();
//     return (
//       <View style={[styles.container, styles.pageContainer]}>
//         {this.renderIsSignedIn()}
//         {this.renderGetCurrentUser()}
//         {this.renderGetTokens()}
//         {body}
//       </View>
//     );
//   }

//   renderIsSignedIn() {
//     return (
//       <Button
//         onPress={async () => {
//           const isSignedIn = await GoogleSignin.isSignedIn();
//           Alert.alert(String(isSignedIn));
//         }}
//         title="is user signed in?"
//       />
//     );
//   }

//   renderGetCurrentUser() {
//     return (
//       <Button
//         onPress={async () => {
//           const userInfo = await GoogleSignin.getCurrentUser();
//           Alert.alert(
//             'current user',
//             userInfo ? JSON.stringify(userInfo.user) : 'null',
//           );
//         }}
//         title="get current user"
//       />
//     );
//   }

//   renderGetTokens() {
//     return (
//       <Button
//         onPress={async () => {
//           const isSignedIn = await GoogleSignin.getTokens();
//           Alert.alert('tokens', JSON.stringify(isSignedIn));
//         }}
//         title="get tokens"
//       />
//     );
//   }

//   renderUserInfo(userInfo) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.userInfo}>Welcome {userInfo.user.name}</Text>
//         <Text>Your user info: {JSON.stringify(userInfo.user)}</Text>
//         <TokenClearingView userInfo={userInfo} />

//         <Button onPress={this._signOut} title="Log out" />
//         {this.renderError()}
//       </View>
//     );
//   }

//   renderSignInButton() {
//     return (
//       <View style={styles.container}>
//         <GoogleSigninButton
//           size={GoogleSigninButton.Size.Standard}
//           color={GoogleSigninButton.Color.Auto}
//           onPress={this._signIn}
//         />
//         {this.renderError()}
//       </View>
//     );
//   }

//   renderError() {
//     const {error} = this.state;
//     if (!error) {
//       return null;
//     }
//     const text = `${error.toString()} ${error.code ? error.code : ''}`;
//     return <Text>{text}</Text>;
//   }

//   _signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({userInfo, error: null});
//     } catch (error) {
//       switch (error.code) {
//         case statusCodes.SIGN_IN_CANCELLED:
//           // sign in was cancelled
//           Alert.alert('cancelled');
//           break;
//         case statusCodes.IN_PROGRESS:
//           // operation (eg. sign in) already in progress
//           Alert.alert('in progress');
//           break;
//         case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
//           // android only
//           Alert.alert('play services not available or outdated');
//           break;
//         default:
//           Alert.alert('Something went wrong', error.toString());
//           this.setState({
//             error,
//           });
//       }
//     }
//   };

//   _signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();

//       this.setState({userInfo: null, error: null});
//     } catch (error) {
//       this.setState({
//         error,
//       });
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   userInfo: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
//   pageContainer: {flex: 1},
// });

export default App;
