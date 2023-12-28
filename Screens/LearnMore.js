import React,{useState} from "react";
import {View,ScrollView,Text,TextInput,Button,Image,ImageBackground} from 'react-native';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const LearnMore=(props)=>{

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.headerContainer} source={require('./assets/Rectangle.png')}><Text style={styles.headerText}>Choose A Language</Text></ImageBackground>
      
        <View style={styles.options}>
        
        <TouchableOpacity onPress={()=>props.navigation.navigate("Dictionary")} style={styles.btn}><ImageBackground style={styles.img} source={require('./assets/Rectanglee.png')}>
        <Text style={styles.btnText} >English</Text></ImageBackground></TouchableOpacity>
        
        <TouchableOpacity onPress={()=>props.navigation.navigate("Dictionary")} style={styles.btn}><ImageBackground style={styles.img} source={require('./assets/Rectanglee.png')}>
        <Text style={styles.btnText} >German</Text></ImageBackground></TouchableOpacity>
        
        <TouchableOpacity onPress={()=>props.navigation.navigate("Dictionary")} style={styles.btn}><ImageBackground style={styles.img} source={require('./assets/Rectanglee.png')}>
        <Text style={styles.btnText} >French</Text></ImageBackground></TouchableOpacity>
        
        <TouchableOpacity onPress={()=>props.navigation.navigate("Dictionary")} style={styles.btn}><ImageBackground style={styles.img} source={require('./assets/Rectanglee.png')}>
        <Text style={styles.btnText} >Italian</Text></ImageBackground></TouchableOpacity>
        
        <TouchableOpacity onPress={()=>props.navigation.navigate("Dictionary")} style={styles.btn}><ImageBackground style={styles.img} source={require('./assets/Rectanglee.png')}>
        <Text style={styles.btnText} >Arabic</Text></ImageBackground></TouchableOpacity>
        
        <TouchableOpacity onPress={()=>props.navigation.navigate("Dictionary")} style={styles.btn}><ImageBackground style={styles.img} source={require('./assets/Rectanglee.png')}>
        <Text style={styles.btnText} >Chinese</Text></ImageBackground></TouchableOpacity>

       
        
        </View>
      
        <TouchableOpacity style={styles.backbtn} onPress={()=>props.navigation.navigate('Profile')}>
        <Text style={styles.backbtntxt} >Back</Text></TouchableOpacity>
        
        </View>
        
    )
}

export default LearnMore;

const styles=StyleSheet.create({
    container:{
     marginTop:0,
     backgroundColor:'#90FFDB',
     flex:1,
    },
    headerContainer:{
    width:'90%',
    marginTop:28,
    alignItems:"center",
    marginLeft:30,
    },
    headerText:{
        fontSize:30,
        padding:10,
        marginRight:20,
    },
    options:{
    marginTop:'27%',
    marginRight:'40%'
    },
    btn:{
        width:190,
        marginBottom:'10%',
        height:'8%',
       
    },
    btnText:{
        fontSize:22,
        marginLeft:30,
    },
    backbtn:{
        width:'20%',
        backgroundColor:'#5A189A',
        marginLeft:'7%'
    },
    backbtntxt:{
        fontSize:20,
        color:'white',
        paddingLeft:'20%',
        paddingBottom:'6%'
    },

})