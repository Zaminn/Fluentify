import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, ToastAndroid, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
// import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {storeAuthToken} from './AuthService.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const Login = (props) => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [passwordVisible,setPasswordVisible]=useState(false);



  const togglePasswordVisibility=()=>{
    setPasswordVisible(!passwordVisible);
  }

  const navigation=useNavigation();
    
   




const loginn =async ()=> {


        const axiosInstance=axios.create({
          baseURL:'http://192.168.114.150:3000',
          headers:{
            'Content-Type':'application/json'
          },
        });
        axiosInstance.post("/login",{username,password})
        .then(response=>{
          console.log(response.data.message);
          console.log("hi")
          if (response.data.message==="Login successful"){
            console.log(response.data.token)
            const accessToken=response.data.token;
            console.log(accessToken);

            axiosInstance.get('http://192.168.114.150:3000/protected-resource', {
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `${accessToken}`,
              },
          })
            .then( (async response=> {
            if(response.data.message==="This is a protected resource"){
              console.log(response.data.user.username)
              
              let userProfile=response.data.user.username;
              
              AsyncStorage.setItem("authToken",accessToken);
              AsyncStorage.setItem("username",userProfile);
              AsyncStorage.getItem("authToken").then((value)=>{
                console.log("Value set of logger",value)
              })
              navigation.reset({
                index:0,
                routes:[{name:"Profile"}]
              })
              }
            else {
            Alert.alert("Error","Could Not Verify User");
            }
          }))
          .catch((error)=>{
            console.log("errro",error);
          }) 
          }
          else if(response.data.error==='Invalid password'){
            Alert.alert("Validation Error","Enter Correct Details");
          }
        })
        .catch(error=>{
          console.log(error);
          Alert.alert("User Account Doesnt Exist","SignUp First")
        })

};

    

    return (
<ScrollView>

      <KeyboardAvoidingView>
      <View style={styless.login}>
      <Image source={require('./assets/WorldMap.png')}></Image>

      <Text style={styless.header}>Login</Text>

      <TextInput style={styless.einpt} autoCapitalize="none" onChangeText={text=>setUsername(text)} placeholder="Enter your Username" required value={username}></TextInput>

      <TextInput secureTextEntry={!passwordVisible} style={styless.pinpt} value={password} onChangeText={textt=>setPassword(textt)} placeholder="Password" required >
      </TextInput>
      <TouchableOpacity style={{position:'relative',left:100,bottom:40}} onPress={togglePasswordVisibility}><Image style={{width:20,height:20}} source={passwordVisible ? require('./assets/Hide.png') : require('./assets/eye.png')}></Image></TouchableOpacity>


      <TouchableOpacity onPress={()=> props.navigation.navigate("ResetPassword")}>
      <Text style={styless.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styless.button} onPress={loginn} >
      <Text style={styless.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styless.buttonAlt} onPress={props=>navigation.navigate("SignUp")}  >
      <Text style={styless.buttonAltText}>SignUp</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text>SignIn with Googleee</Text>
      </TouchableOpacity>


      <Text style={{fontSize:22}}>{loginStatus}</Text>

      </View>
      </KeyboardAvoidingView>
      </ScrollView>

    );
  
  };
  
 
     
     
     const styless=StyleSheet.create({
     
         login:{
          alignItems:"center",
          marginTop:0,
             
         },
         header:{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: '0%',
            marginTop: '2%',
            marginBottom: '3%',
            color: 'black',
         },
         
         einpt:{
          width: '70%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
         },
         ninpt:{
            width: '70%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
           },
         pinpt:{
          width: '70%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
         },
         forgot:{
          paddingLeft:130,
         },
         button: {
          backgroundColor: '#5A189A', 
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop:10,
          width:'70%'
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        },
        buttonn: {
          backgroundColor: '#0d0c0c', 
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop:20,
          width:'70%'
        },
        buttonTextt: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        },
        buttonAlt: {
            width: '80%',
            borderWidth: 1,
            height: 40,
            borderRadius: 50,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
        },
        buttonAltText: {
            color: 'black',
            fontSize: 16,
            fontWeight: '400',
        },
        message: {
            fontSize: 16,
            marginVertical: '0%',
        },
        new:{
          marginTop:10,
          marginBottom:-10,
        },
        error: { 
          color: 'red', 
          fontSize: 20, 
          marginBottom: 12, 
      }, 
      profiletxt:{color:'white',fontSize:22,padding:10},
      profilebtn:{width:'40%',backgroundColor:'black',marginTop:'5%'}
     })
  
export default Login;


