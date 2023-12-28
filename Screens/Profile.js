import React, { useEffect, useState } from "react";
import { Button, Image, Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import ImagePicker from 'react-native-image-picker';
import DateTime from "./Date";
// import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import CloudinaryImage from "../components/CloudImage";
import axios from "axios";
import { getAuthToken, removeAuthToken } from './AuthService';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Login";
import { useFocusEffect } from "@react-navigation/native";

const Profile = ({ route }, props) => {

  const [present, setPresent] = React.useState(false);
  const navigation = useNavigation();
  const [user_name, setUser_name] = React.useState(null);
  const [public_id,setPublic_id]=React.useState('');
  const[age,setAge]=useState('');
  const [user_id,setUser_id]=useState('')

  const [showScreen,setShowScreen]=useState(false);
  let userProfile;
  
  
  const getUser=async ()=>{
   await  AsyncStorage.getItem("username").then((value)=>{
      if(value===null){
      Alert.alert("NOT SET")
       return 
      }
        else if(value.length>0){
        console.log("value of username:",value)
        userProfile=value;
        console.log("userProfile:",userProfile)
        }
    });
  }
 
  const removeUser=async()=>{
        await AsyncStorage.getItem('username').then((value)=>{
          console.log("value before logout button click:",value)
        })
        await AsyncStorage.removeItem("username");
        await AsyncStorage.getItem('username').then((value)=>{
          console.log("value after logout button click:",value)
        })
  }

  const [public_url,setPublic_url]=useState('');



  const checkAuthentication=async()=>{
        await AsyncStorage.getItem("authToken").then((value)=>{
              console.log("value at auth:",value)
        }) 
  }

  const handleLogout=async()=>{
       removeUser();
       await AsyncStorage.removeItem("authToken")
       navigation.reset({
        index:0,
        routes:[{name:'Tabs'}]
       })
       AsyncStorage.getItem("authToken").then((value)=>{
        
        console.log("value of authToken after logout:",value);
        
       })
  }
  const LogoutAfterTime=async()=>{
       await AsyncStorage.getItem("authToken").then((value)=>{
        if(value === null){
          navigation.navigate("Tabs");
        }
       })
  }

  const sendDatatoInfo=()=>{
    navigation.navigate('PersonInfo',{user_name,age,public_url})
  }
  const sendDatatoEdit=()=>{
    navigation.navigate('EditProfile',{user_name,age,public_url})
  }
   
   const userData=async()=>{
    await getUser();

    const axiosInstance=axios.create({
      baseURL:'http://192.168.114.150:3000',
      headers:{
        'Content-Type':'application/json'
      },
    })
    
   
    
    axiosInstance.post('/getUserData',{userProfile})
    .then((response)=>{
      console.log(response)
      console.log(response.data[0].user_id);
      setUser_id(response.data[0].user_id)

      console.log(response.data[0].user_name);
      setUser_name(response.data[0].user_name)

      console.log(response.data[0].bdate);
      setAge(response.data[0].bdate);

      console.log(response.data[0].public_id);
      setPublic_id(response.data[0].public_id);

      console.log(response.data[0].public_url);
      setPublic_url(response.data[0].public_url)

    })
    .catch((error)=>{
      console.log("error",error)
    })
  }
  
 
  useEffect(()=>{
    userData();
    checkAuthentication();
    LogoutAfterTime();
   
  },[])
  useFocusEffect(
    React.useCallback(() => {
      userData();
      checkAuthentication();
      LogoutAfterTime();

      // Optionally, you can run some code when the screen gains focus

      return () => {
        console.log('Screen unfocused');
        // Optionally, you can run some code when the screen loses focus
      };
    }, [])
  );


  return (
    <View style={styles.profile}>
      <View style={styles.header}><Text style={styles.headertxt}>Your Profile</Text></View>
      
      <CloudinaryImage imageUrl={public_url} />
      <Text style={{fontSize:19,marginLeft:'27%'}}>Welcome Back {user_name}</Text>

      <Text style={styles.date}><DateTime></DateTime></Text>
      <Text>{age}</Text>


      <TouchableOpacity style={styles.button1} onPress={sendDatatoInfo}>
        <Text style={styles.buttonText1}>Personal Information</Text><Image style={styles.arrow1} source={require('./assets/arrow_forward.png')}></Image></TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("LearnMore")}>
        <Text style={styles.buttonText2}>Learn More</Text><Image style={styles.arrow2} source={require('./assets/arrow_forward.png')}></Image></TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("QuizMenu")}>
        <Text style={styles.buttonText3}>Quizes and FlashCards</Text><Image style={styles.arrow3} source={require('./assets/arrow_forward.png')}></Image></TouchableOpacity>

      <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate("Badges")}>
        <Text style={styles.buttonText4}>My Badges</Text><Image style={styles.arrow4} source={require('./assets/arrow_forward.png')}></Image></TouchableOpacity>

      <TouchableOpacity style={styles.buttonn} onPress={sendDatatoEdit}>
        <Text style={styles.buttonTextt}>Edit Your Profile</Text></TouchableOpacity>

      <TouchableOpacity style={styles.lgtbtn} onPress={handleLogout}>
        <Text style={styles.lgtbtntxt}>Logout</Text><Image style={styles.lgtimg} source={require('./assets/exit_to_app.png')}></Image></TouchableOpacity>


    </View>
  )
}



export default Profile;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#80FFDB',
    flex: 1,
    marginTop: 0,
  },
  header: {
    width: '100%',
    height: '50',
    borderStyle: 'dashed',
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: "center",
    marginTop: '7%'

  },
  headertxt: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  img: {
    marginTop: 25,
    marginLeft: 100,
    borderRadius:70
  },
  emailtxt: {
    textAlign: 'center',
    marginTop: '3%',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  button1: {
    backgroundColor: '#5AEDC9', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: '65%',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#5AEDC9', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: '65%',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText2: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button3: {
    backgroundColor: '#5AEDC9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: '80%',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText3: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button4: {
    backgroundColor: '#5AEDC9', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: '60%',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText4: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow1: {
    marginLeft: 17,
  },
  arrow2: {
    marginLeft: 93,
  },
  arrow3: {
    marginLeft: 54,
  },
  arrow4: {
    marginLeft: 74
  },
  buttonn: {
    backgroundColor: '#C77DFF', 
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: '70%',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',

  },
  buttonTextt: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 28,
  },
  lgtbtn: {
    backgroundColor: '#80FFDB',
    padding:10,
    borderRadius: 5,
    width:'22%',
    marginLeft:'5%',
    marginTop:'2%',
    marginBottom:'2%'
  },
  lgtbtntxt: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  lgtimg: {

  },
  date: {
    marginLeft: '5%',

  },
})














