import React, { useEffect, useState } from 'react';
import { View,TextInput, Text, Image, StyleSheet, TouchableOpacity, ImageBackground ,navigate,navigation} from 'react-native';
// import SignIn from './SignIn'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Signup from './Signup';
import ResetPassword from './Screens/ResetPassword';
import Profile from './Screens/Profile';
import PersonInfo from './Screens/PersonInfo';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import LearnMore from './Screens/LearnMore';
import Badges from './Screens/Badges';
import SignUp from './Screens/SignUp';
import Quiz from './Screens/Quiz';
import EditProfile from './Screens/EditProfile';
import Settings from './Screens/Settings';
import QuizMenu from './Screens/QuizMenu';
import Dictionary from './Screens/Dictionary';
import OnboardingScreen from './Screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './MainNavigatore';



const App = ()=>{
 return(
  <MainNavigator/>
 )
};


 
 

export default App;


































