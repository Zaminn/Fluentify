import React,{useState} from "react";
import {View,ScrollView,Text,TextInput,Button,Image,ImageBackground} from 'react-native';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const Dictionary=(props)=>{
    return(
        <ScrollView style={styles.container}>
        <ImageBackground style={styles.headerContainer} source={require('./assets/Rectangle.png')}><Text style={styles.headerText}>English Dictionary</Text></ImageBackground>
        
        <View style={styles.SearchV}>
        <TextInput style={styles.SearchInpt} placeholder="Search For a Word" ></TextInput><TouchableOpacity style={styles.SearchBtn}>
        <Text style={styles.SearchTxt}>Search</Text><Image style={{marginLeft:5}} source={require("./assets/arrow_forward.png")}></Image></TouchableOpacity>
        </View>

        <View style={styles.secV}>
        <View style={styles.wordBtn}><Text style={styles.wordBtnTxt}>Words</Text></View>
        <View style={styles.wordBtn}><Text style={styles.wordBtnTxt}>Meanings</Text></View>
        </View>
        <View style={styles.ThirdV}>
        <View style={styles.wordV}><Text style={styles.wordTxt}>Bi-Lengual</Text></View>
        <View style={styles.meaningV}><Text style={styles.meaningTxt}>A person who is Able to Speak Multiple Languages</Text></View>
        </View>

        <View style={styles.ThirdV}>
        <View style={styles.wordV}><Text style={styles.wordTxt}>Bi-Lengual</Text></View>
        <View style={styles.meaningV}><Text style={styles.meaningTxt}>A person who is Able to Speak Multiple Languages</Text></View>
        </View>

        <View style={styles.ThirdV}>
        <View style={styles.wordV}><Text style={styles.wordTxt}>Bi-Lengual</Text></View>
        <View style={styles.meaningV}><Text style={styles.meaningTxt}>A person who is Able to Speak Multiple Languages</Text></View>
        </View>

        <View style={styles.ThirdV}>
        <View style={styles.wordV}><Text style={styles.wordTxt}>Bi-Lengual</Text></View>
        <View style={styles.meaningV}><Text style={styles.meaningTxt}>A person who is Able to Speak Multiple Languages</Text></View>
        </View>
        <View style={styles.ThirdV}>
        <View style={styles.wordV}><Text style={styles.wordTxt}>Bi-Lengual</Text></View>
        <View style={styles.meaningV}><Text style={styles.meaningTxt}>A person who is Able to Speak Multiple Languages</Text></View>
        </View>
        <View style={styles.ThirdV}>
        <View style={styles.wordV}><Text style={styles.wordTxt}>Bi-Lengual</Text></View>
        <View style={styles.meaningV}><Text style={styles.meaningTxt}>A person who is Able to Speak Multiple Languages</Text></View>
        </View>
        <View style={styles.ThirdV}>
        <View style={styles.wordV}><Text style={styles.wordTxt}>Bi-Lengual</Text></View>
        <View style={styles.meaningV}><Text style={styles.meaningTxt}>A person who is Able to Speak Multiple Languages</Text></View>
        </View>
        </ScrollView>

    )
}

export default Dictionary;

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
       SearchV:{
        display:'felx',
        flexDirection:'row',
        marginLeft:'15%',
        marginTop:'10%',
       },
       SearchInpt:{
        width:'60%',
        fontSize:17,
        backgroundColor:'white',
        borderRadius:20,
        height:38,
        paddingLeft:7
       },
       SearchBtn:{
        width:'29%',
        backgroundColor:'#C77DFF',
        marginLeft:'3%',
        display:'flex',
        flexDirection:'row',
        borderRadius:20,
        paddingLeft:10,
        paddingTop:10,
        
       },
       SearchTxt:{
        color:'white'
       },
       secV:{
        marginTop:'10%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:'15%'
       },
       wordBtn:{
        width:'40%',
        backgroundColor:'#C77DFF',
       height:35,
       borderRadius:15,
       
       },
       wordBtnTxt:{
        fontSize:19,
        color:'white',
       textAlign:'center',
       paddingTop:5
       },
       ThirdV:{
        marginTop:'5%',
        display:'flex',
        flexDirection:'row',
        margin:'7%'
       },
       wordV:{
        width:'38%',
        backgroundColor:'#D9D9D9',
        paddingLeft:20,
        paddingTop:6,
        height:35
       },
       meaningV:{
        backgroundColor:'white',
        height:70,
        padding:10,
        marginLeft:'5%',
        width:'59%',
        borderRadius:20
       },
       meaningTxt:{
        fontSize:14
       }

       


})