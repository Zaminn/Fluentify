import { SafeAreaView, ScrollView, useState } from "react-native";
import React from "react-native";
import { Image,Text,View,TextInput,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";



const Quiz =(props)=>{
    return(
       
        <ScrollView>
        <View style={styles.container}>
        <ImageBackground style={styles.headerContainer} source={require('./assets/Rectangle.png')}><Text style={styles.headerText}>Quiz#1        1/10</Text></ImageBackground>
       
       <Image source={require('./assets/Book.png')} style={styles.bookimg}></Image>
       <Text style={styles.qtext}>What is this Thing Called?</Text>
       <View style={styles.options}>
        
       <TouchableOpacity style={styles.btn}>
       <Text style={styles.btnText} >A) Pen</Text></TouchableOpacity>
       
       <TouchableOpacity style={styles.btnC}>
       <Text style={styles.btnTextC} >B) Book</Text></TouchableOpacity>
       
       <TouchableOpacity style={styles.btn}>
       <Text style={styles.btnText} >C) Cat</Text></TouchableOpacity>
       
       <TouchableOpacity style={styles.btn}>
       <Text style={styles.btnText} >D) Blanket</Text></TouchableOpacity>
       </View>
       
       <TouchableOpacity style={styles.backbtn} onPress={()=>props.navigation.navigate('Profile')}>
        <Text style={styles.backbtntxt} >Back</Text></TouchableOpacity>
       </View>
        </ScrollView>
       
    )
}

export default Quiz;

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
       marginBottom:'10%',
       borderRadius:10,
       },
       headerText:{
           fontSize:30,
           padding:10,
           marginRight:20,
       },
     
       bookimg:{
        marginLeft:'22%'
       },
       qtext:{
        marginLeft:'18%',
        fontSize:22,
        paddingTop:'5%'        
       },
       options:{
        marginTop:'10%',
        marginLeft:'10%'
        },
        btn:{
            width:280,
            height:35,
            marginBottom:20,
            borderRadius:10,
            backgroundColor:'#D9D9D9' 
        },
        btnText:{
            fontSize:22,
            marginLeft:30,
        },
        btnC:{
            width:280,
            height:35,
            marginBottom:20,
            borderRadius:10,
            backgroundColor:'#C77DFF'
            
        },
        btnTextC:{
            fontSize:22,
            marginLeft:30,
            
        },
        backbtn:{
            width:'20%',
            backgroundColor:'#5A189A',
            marginLeft:'7%',
            marginTop:'15%',
            marginBottom:'10%'
        },
        backbtntxt:{
            fontSize:20,
            color:'white',
            paddingLeft:'20%',
            paddingBottom:'6%'
        },
    
 })
