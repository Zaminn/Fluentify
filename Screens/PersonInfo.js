import { useState } from "react";
import { Image,Text,View,TextInput,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import ImagePicker from 'react-native-image-picker';
import { Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CloudinaryImage from "../components/CloudImage";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import axios from "axios";


const PersonInfo=(props)=>{

    const navigation=useNavigation();
 
    const route=useRoute();
    const user_name=route.params?.user_name;
    const age=route.params?.age;
    const public_url=route.params?.public_url;
    console.log("here",user_name,age,public_url)
    const[email,setEmail]=useState('');

    const sendDatatoEdit=()=>{
        navigation.navigate('EditProfile',{user_name,age,public_url})
      }

      const getEmail=()=>{
        const axiosInstance=axios.create({
            baseURL:'http://192.168.114.150:3000',
            headers:{
              'Content-Type':'application/json'
            },
          })
          axiosInstance.post('/getUsers',{user_name})
          .then((response)=>{
            console.log(response);
            setEmail(response.data[0].email);
          })
          .catch((error)=>{
            console.log(error);
          })
      }
      useFocusEffect(
        React.useCallback(() => {
          getEmail();
    
          // Optionally, you can run some code when the screen gains focus
    
          return () => {
            console.log('Screen unfocused');
            // Optionally, you can run some code when the screen loses focus
          }
        }, [])
      );

    return(
        <View style={styles.profile}>
        <View style={styles.header}><Text style={styles.headertxt}>Your Profile</Text></View>
        <CloudinaryImage imageUrl={public_url}/>
        <Text style={styles.pictxt}>Profile Picture</Text>
        
 
        <Text style={styles.name}>Name: {user_name || null}</Text>
        <Text style={styles.email}>Email: {email}</Text>
        <Text style={styles.age}>Age: {age || 18}</Text>
        <Text style={styles.bdate}>BirthDate: -/-/-</Text>
        
        
        <TouchableOpacity onPress={sendDatatoEdit} style={styles.savebtn}><Text style={styles.savebtntxt}>Edit</Text><Image style={styles.saveimg}source={require('./assets/edit.png')}></Image></TouchableOpacity>
        
        <View style={styles.btns}>
      
        <Button style={styles.backbtn} title="Settings" color="#C77DFF" onPress={()=>props.navigation.navigate("Settings")}/> 
        </View>
       
        </View>
    )
}

export default PersonInfo;

const styles=StyleSheet.create({
    profile:{
     backgroundColor:'#90FFDB',
     flex:1,
     paddingTop:10,
     marginTop:0,
    },
    header:{
        width:'100%',
        height:'40',
        borderStyle:'dashed',
        borderColor:'black',
        alignItems:'center',
        borderRadius:4,
        justifyContent:"center",
        marginTop:'5%'

    },
    headertxt:{
        fontSize:32,
        fontWeight:'bold',
    },
    pictxt:{
        marginLeft:'0%',
        marginTop:0,
        textAlign:"center",
        fontSize:14,
        fontWeight:'bold'
    },
   
    name:{
        fontSize:16,
        textAlign:'left',
        marginTop:30,
        padding: 15,
        marginLeft:33,
        
    },
    email:{
        fontSize:16,
        textAlign:'left',
        marginTop:5,
        marginLeft:48
    },
    age:{
        fontSize:16,
        textAlign:'left',
        marginTop:5,
        padding: 15,
        marginLeft:33,
    },
    loc:{
        fontSize:16,
        textAlign:'left',
        marginTop:-10,
        padding: 15,
        marginLeft:33,
    },
    bdate:{
        fontSize:16,
        textAlign:'left',
        marginTop:-10,
        padding: 15,
        marginLeft:33,
    },
    savebtn:{
        backgroundColor: '#5A189A', 
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 5,
        width:'24%',
        marginLeft:270,
        display:'flex',
        flexDirection:'row',
        marginBottom:60,
    },
    savebtntxt:{
        color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    },
    saveimg:{
        marginLeft:10,
    },
    
    btns:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:0,
        marginBottom:20
    },
    backbtn:{
        backgroundColor:'#5A189A'
        
    },
  
  
})