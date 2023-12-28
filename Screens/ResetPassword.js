import { Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from "react-native";
import axios from "axios";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const ResetPassword = (props) => {

  const [email,setEmail]=useState('');
  const [errorMessage,setErrormessage]=useState('');
  const [passwordVisible,setPasswordVisible]=useState(false);
  const[passwordError,setPasswordError]=useState('');
  const[activity,setActivity]=useState(false);


  const togglePasswordVisibility=()=>{
    setPasswordVisible(!passwordVisible);
  }
  const navigation=useNavigation();

  const Timer=()=>{
    const timer=setTimeout(() => {
      navigation.navigate("Login");
    },2000);
    return ()=>{clearTimeout(timer)}
  }

  const handlerReset=()=>{
    setActivity(true)
    const axiosInstance=axios.create({
      baseURL:'http://192.168.114.150:3000',
      headers:{
        'Content-Type':'application/json'
      },
    })
    axiosInstance.post('/sendEmail',{email})
    
    .then((response)=>{
      console.log(response)
      if(response.data.message==="Reset email sent successfully"){
        setActivity(false)
        Alert.alert("Success","Mail Sent To This emial address")
      }
      else if(response.data.error==='User not found' ){
        setActivity(false)
        Alert.alert("Failure","User With this Email Not Found")
      }
      else if(response.data.error==='Database Query Error' ){
        setActivity(false)
        Alert.alert("Failure","Server Error")
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useFocusEffect(
    React.useCallback(() => {
      setActivity(false)
      setEmail('');
     
     

      // Optionally, you can run some code when the screen gains focus

      return () => {
        console.log('Screen unfocused');
        // Optionally, you can run some code when the screen loses focus
      };
    }, [])
  );

  return (
   <ScrollView>
   <View style={styles.container}>
   <Text style={styles.title}>Reset Password</Text>
   <Text style={styles.subtitle}>
    We will send you an email with a link to change your password
   </Text>

   <TextInput
     placeholder="Your Email"
     onChangeText={(text) => setEmail(text)}
     value={email}
     secureTextEntry={false}
     style={styles.input}
   />
  
  {activity? <ActivityIndicator size="large" color='#0000ff'/> : null}
   
   <TouchableOpacity style={styles.button} onPress={handlerReset}>
    <Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
 </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderColor:'#C77DFF',
    borderWidth:5,
    marginTop:100,
    marginBottom:100,
    marginLeft:40,
    marginRight:40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#5A189A', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:15,
    width:'70%'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
  errmsg:{
    color:'red',
    fontSize:12,
    marginLeft:'0%'
  }
});


export default ResetPassword;





// const handlerReset = () => {
    

//   if(newPassword.length >7){
//     setPasswordError("")
//   }
//       if(newPassword.length <=7){
//         setPasswordError("Enter A Strong Password")
//         return;
//       }
//    const axiosInstance=axios.create({
//     baseURL:'http://192.168.114.150:3000',
//     headers:{
//       'Content-Type':'application/json'
//     },
//    });
//   axiosInstance.post("/Resetpassword",{email,newPassword})
//   .then(response=>{
//     console.log(response);
//     if(response.data.message==="Updated Successfully"){
//       Alert.alert("Success","Password Has Been Reset");
//       Timer();
//     }
//     else if(response.data.error === "User Not Found"){
//       Alert.alert("Validation Error","User Not Found")
//     }
//   })
//   .catch(error=>{
//     console.log("error",error);
//   })
  
//   };
  
//   const checkPassword=()=>{
//     if(newPassword != confirmPassword){
//       setErrormessage("Passwords Doesn't Match");
//     }
//     else{
//       setErrormessage("");
//     }
//   }
//   useEffect(()=>{
//     checkPassword();
//   });