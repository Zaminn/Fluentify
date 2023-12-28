import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
// import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const SignUp = (props) => {

  const navigation=useNavigation();
   
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const[passwordVisible,setPasswordVisible]=useState(false);
  const[emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const[usernameError,setUsernameError]=useState('');
  const[errorDisplay,setErrorDisplay]=useState(false);
  const[question,setQuestion]=useState(true)

  const togglePasswordVisibility=()=>{
    setPasswordVisible(!passwordVisible);
  }
  const handleQuestion=()=>{
    setQuestion(false)
  }

  const Timer=()=>{
    const timer=setTimeout(() => {
      navigation.navigate("Login");
    },2000);
    return ()=>{clearTimeout(timer)}
  }

  const EmailValidation=()=>{
   
  }

  const handleSignup = ()=> {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setEmailError('');
    } else {
      setEmailError("Please Enter a Valid Email");
      return;
      }   

        if(username.length <=4  && password.length >7){
          setUsernameError("Username Must Have Atleast 5 characters")
          setPasswordError("")
          return;
        }
        if(password.length <=7 && username.length >4){
          setPasswordError("Please Enter a Strng Password")
          setUsernameError("");
          return;
        }
        if(password.length <=7 && username.length <=4){
          setUsernameError("Username Must Have Atleast 5 characters")
          setPasswordError("Please Enter a Strng Password")    
          return;
        }
        if(password.length <=7){
          setPasswordError("Please Enter a Strng Password")          
          return;
        }
     
        setErrorDisplay(true)
   
     const axiosInstance=axios.create({
      baseURL:'http://192.168.114.150:3000',
      headers:{
        'Content-Type':'application/json'
      },
     });
    axiosInstance.post("/register",{email,username,password})
    .then(response=>{
      console.log(response);
      if (response.data.success ===true){
        // Alert.alert("Succes","User Registered Successfuly")
        console.log("success");
        Alert.alert("Success","Account Created")
        Timer();
      }
      else if(response.data.error ==="User already exists") {
        //  Alert.alert("Validation Error","Enter Correct Details");
        Alert.alert("Account Already Exists With this Email")
        console.log("User Already Exists")
      }
      else{
        console.log("Failure");
        Alert.alert("Failed to Resgister this account")
      }
    })
    .catch(error=>{
      console.log(error);
    })
    
    };
    
    useFocusEffect(
      React.useCallback(() => {
        setQuestion(true)
        setEmail('');
        setPassword('')
        setUsername('')
        setEmailError('')
        setPasswordError('')
        setUsernameError('')
  
        // Optionally, you can run some code when the screen gains focus
  
        return () => {
          console.log('Screen unfocused');
          // Optionally, you can run some code when the screen loses focus
        };
      }, [])
    );

    
   
   
    

    return (

          <ScrollView >
          <View style={styless.login}>
          <Image source={require('./assets/WorldMap.png')}></Image>

          <Text style={styless.header}>SignUp</Text>

          <TextInput style={styless.einpt} placeholder="Email" autoCapitalize="none" value={email} onChangeText={text=>setEmail(text)}></TextInput>
         {!errorDisplay ?  <Text style={{color:'red',marginRight:'23%',marginTop:'-3%'}}>{emailError}</Text> : null}
          
          <TextInput style={styless.einpt} placeholder="UserName" autoCapitalize='none' value={username} onChangeText={text=>setUsername(text)}></TextInput>
          {!errorDisplay ?  <Text style={{color:'red',marginLeft:'5%',marginTop:'-3%'}}>{usernameError}</Text> : null}

          <TextInput secureTextEntry={!passwordVisible} style={styless.pinpt} placeholder="Password" value={password} onChangeText={text=>setPassword(text)}></TextInput>
          {!errorDisplay ? <Text style={{color:'red',marginRight:'15%',marginTop:'-3%'}}>{passwordError}</Text> : null}

          <TouchableOpacity style={{position:'relative',left:100,bottom:50}} onPress={togglePasswordVisibility}>
          <Image style={{width:20,height:20}} source={passwordVisible ? require('./assets/Hide.png') : require('./assets/eye.png')}></Image></TouchableOpacity>

          {question? null:<Text>Remember Your Username as you will need your Username to Login</Text>}
          <TouchableOpacity style={{position:'relative',left:100,bottom:20}} onPress={handleQuestion}>
          <Image style={{width:20,height:20}} source={question? require('./assets/questionmark.png') :  null }></Image></TouchableOpacity>
          
          <TouchableOpacity style={styless.button} onPress={handleSignup} >
          <Text style={styless.buttonText}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styless.buttonAlt} onPress={()=>props.navigation.navigate("Login")}  >
          <Text style={styless.buttonAltText}>Login</Text>
          </TouchableOpacity>

         
         
          <Text style={{fontSize:22}}>{registerStatus}</Text>

          </View>
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
          backgroundColor: '#5A189A', // Replace with your desired button color
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop:'2%',
          width:'70%'
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        },
        buttonn: {
          backgroundColor: '#0d0c0c', // Replace with your desired button color
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
     })
  
export default SignUp;



