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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const MainNavigator=()=>{

const[isFirstLaunch,setIsFirstLaunch]=useState(false);
const [loggedIn,setLoggedIn]=useState(false);

const checkOn=()=>{
  AsyncStorage.getItem("alreadyLaunched").then((value)=>{
    if(value === null){
      AsyncStorage.setItem("alreadyLaunched","true");
      setIsFirstLaunch(true)
    }
    else{
      setIsFirstLaunch(false);
    }
  })
}

    const checkLogin=()=>[
    AsyncStorage.getItem('authToken').then((value)=>{
        if(value=== null){
        setLoggedIn(false);
        
        }else {
        setLoggedIn(true);
        console.log("value at navigator",value);
        }
    })
    ]

    useEffect(()=>{
    checkOn();
    checkLogin()
    },[])


const OnBoardingStack=()=>{
    const Stack=createNativeStackNavigator();
    return(
      <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {!isFirstLaunch && (<Stack.Screen  name="OnboardingScreen" component={OnboardingScreen}/>)}
      <Stack.Screen name="Tabs" component={StackNavigator} />
      <Stack.Screen  name='Profile' component={Profile}/>
      <Stack.Screen  name='QuizMenu' component={QuizMenu}/>
      <Stack.Screen  name='Quiz' component={Quiz}/>
      <Stack.Screen  name='PersonInfo' component={PersonInfo}/>
      <Stack.Screen  name='LearnMore' component={LearnMore}/>
      <Stack.Screen  name='Dictionary' component={Dictionary}/>
      <Stack.Screen  name='Badges' component={Badges} />
      <Stack.Screen  name='EditProfile' component={EditProfile}/>
      <Stack.Screen  name='Settings' component={Settings}/>
      </Stack.Navigator></NavigationContainer>
     
      )
}



const StackNavigator=()=>{
    const Tab = createBottomTabNavigator();
  return(
   
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:"blue",tabBarInactiveTintColor:"gray",tabBarLabelStyle:{fontSize:13},tabBarStyle:[{display:"flex"},null] }}>
    <Tab.Screen options={{tabBarIcon: ({ color, size }) => (
        <Image source={require('./Screens/assets/welcomeicon.png')} style={{ tintColor: color, width: size, height: size }} />
      )}} name='Welcome' component={Welcome}/>
      
    <Tab.Screen options={{tabBarIcon: ({ color, size }) => (
        <Image source={require('./Screens/assets/loginicon.png')} style={{ tintColor: color, width: size, height: size }} />
      )}}   name='Login' component={Login}/>
    <Tab.Screen options={{tabBarIcon: ({ color, size }) => (
        <Image source={require('./Screens/assets/singupicon.png')} style={{ tintColor: color, width: size, height: size }} />
      )}}  name='SignUp' component={SignUp}/>
    <Tab.Screen options={{tabBarIcon: ({ color, size }) => (
        <Image source={require('./Screens/assets/resetpasswordicon.png')} style={{ tintColor: color, width: size, height: size }} />
      )}}  name='ResetPassword' component={ResetPassword}/>
    </Tab.Navigator>
 
  )
}


const StackNavigator2=()=>{
  const Stack=createNativeStackNavigator();
  return(
    
  <NavigationContainer independent={true}>
  <Stack.Navigator initialRouteName='Profile' screenOptions={{headerShown:false}}>
  {!loggedIn && (<Stack.Screen name="Tabs" component={StackNavigator} />)}
  {loggedIn && (<Stack.Screen name="Tabs" component={StackNavigator} />)}
  <Stack.Screen  name='Profile' component={Profile}/>
  <Stack.Screen  name='QuizMenu' component={QuizMenu}/>
  <Stack.Screen  name='Quiz' component={Quiz}/>
  <Stack.Screen  name='PersonInfo' component={PersonInfo}/>
  <Stack.Screen  name='LearnMore' component={LearnMore}/>
  <Stack.Screen  name='Dictionary' component={Dictionary}/>
  <Stack.Screen  name='Badges' component={Badges} />
  <Stack.Screen  name='EditProfile' component={EditProfile}/>
  <Stack.Screen  name='Settings' component={Settings}/>
  </Stack.Navigator>
  </NavigationContainer>
   
  )
}






return (
  <NavigationContainer independent={true}>
  {loggedIn? <StackNavigator2/> :<OnBoardingStack/>}
  </NavigationContainer>
)
}

export default MainNavigator;