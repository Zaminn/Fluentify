import React,{useState} from "react";
import {View,ScrollView,Text,TextInput,Button,Image,ImageBackground} from 'react-native';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";


const Badges=(props)=>{
    const [elementVisible,setElementVisible]=useState(false);
    return(
        <ScrollView>
       <View style={styles.headerContainer}>
       <Text style={styles.headerText}>Your Certificates</Text>
       </View>
       
       <View style={styles.certificate}>
       <Image style={styles.cerimg1} source={require('./assets/certificate.png')}></Image>

       <View style={styles.badgeName}><Text style={styles.badgetxt}>A1 Certificate</Text></View>
       
       <Text style={styles.certxt}>{'\n'}Dear Sude Kamis,{'\n'}

       In line with training you have received and the work you have done, you have reached the A1 level in English. You are entitled to receive this certificate because of this success. I wish you continued success. </Text>
       <View style={styles.imgs}>
       <Image style={styles.badgeimg1} source={require('./assets/signature1.png')}/>
       <Image style={styles.badgeimg2} source={require('./assets/badge1.png')}/>
       </View>       
       </View>

       <View style={styles.box2}>
       <Text style={styles.box2txt1}>If you have successfully completed the exam on May 27, you will have reached level A2 !</Text>
       <Text style={styles.box2txt2}>If you follow the courses regularly, you can succeed :) </Text>
       </View>
       <TouchableOpacity style={styles.expandbtn} onPress={()=>setElementVisible(!elementVisible)}><Image source={require('./assets/expand.png')}/></TouchableOpacity>

       { elementVisible ? (
        <View style={styles.certificate2}>
       <Text style={styles.txt2}>You Will Have This Certificate:</Text>
       <View style={styles.A2}>
       <Image style={styles.cerimg2} source={require('./assets/certificate.png')}></Image>
       <View style={styles.badgeName2}><Text style={styles.badgetxt2}>A2 Certificate</Text></View>
       </View>
       </View>
       ): null
    }
       <TouchableOpacity style={styles.backbtn} onPress={()=>props.navigation.navigate('Profile')}>
        <Text style={styles.backbtntxt} >Back</Text></TouchableOpacity>
        </ScrollView>
    )
}

export default Badges;

const styles=StyleSheet.create({
    headerContainer:{
        width:'86%',
        marginTop:35,
        alignItems:"center",
        marginLeft:30,
        backgroundColor:'#C77DFF'
        },
        headerText:{
            fontSize:30,
            padding:10,
            marginRight:20,
        },
        certificate:{
        width:'90%',
        backgroundColor:'#F0D4D4',
        alignItems:'center',
        marginLeft:'5%',
        marginTop:'7%'
        
        },
        cerimg1:{
            marginTop:10,
        },
        badgeName:{
            width:'40%',
            marginTop:'3%',
            backgroundColor:'#599c6a'
        },
        badgetxt:{
        fontSize:19,
        paddingLeft:7,
        
        },
        certxt:{
            padding:5,
        },
        imgs:{
            display:'flex',
            flexDirection:'row',
            marginLeft:'55%'
        },
        badgeimg1:{
            marginRight:-10
        },
        badgeimg2:{
            marginTop:-30,
            marginBottom:20,
        },
        box2:{
            backgroundColor:'#D9D9D9',
            width:'90%',
            alignItems:'center',
            marginLeft:'5%',
            marginTop:'7%',
            
        },
        box2txt1:{
            fontSize:16,
            marginBottom:'5%',
            marginLeft:'3%',
            marginTop:4,
            
        },
        box2txt2:{
            fontSize:16,
            marginBottom:'5%',
            
        },
        expandbtn:{
            alignItems:'center',
            marginTop:'5%',

        },
        certificate2:{
           
            
        },
        txt2:{
            fontSize:22,
            fontWeight:'bold',
            marginLeft:10,
        },
        A2:{
            backgroundColor:'#FBE676',
            alignItems:'center',
            marginTop:10,
            width:'90%',
            marginLeft:'5%'
            
        },
        cerimg2:{
            marginTop:10,
            marginBottom:5,
        },  
        badgeName2:{
            width:'40%',
            marginTop:'3%',
            backgroundColor:'#79a685',
            marginBottom:30,

        },
        badgetxt2:{
        fontSize:19,
        paddingLeft:10,
        
        },
        backbtn:{
            width:'20%',
            backgroundColor:'#5A189A',
            marginLeft:'7%',
            marginTop:'5%',
            marginBottom:'5%'
        },
        backbtntxt:{
            fontSize:20,
            color:'white',
            paddingLeft:'20%',
            paddingBottom:'6%'
        },
    
    })