import React,{useState} from "react";
import {View,ScrollView,Text,TextInput,Button,Image,ImageBackground} from 'react-native';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const Settings=(props)=>{
      const[vpolicy,setVpolicy]=useState(false);
      return(
        <ScrollView style={styles.container}>
        <View >
        <View style={styles.topView}><Image style={{marginTop:5,marginLeft:8}} source={require('./assets/Settings.png')}></Image><Text style={{fontSize:22,padding:10,color:'white'}}>Setting</Text></View>
        
        <View style={{marginTop:'15%'}}>
        <TouchableOpacity style={styles.option}><Text style={styles.optionTxt}>Account And Passwords</Text><Image style={styles.optionImg1} source={require('./assets/arrow_forward.png')}></Image></TouchableOpacity>
        
        <TouchableOpacity style={styles.option}><Text style={styles.optionTxt}>Notifications</Text><Image style={styles.optionImg2} source={require('./assets/arrow_forward.png')}></Image></TouchableOpacity>
        
        <TouchableOpacity style={styles.option}><Text style={styles.optionTxt}>Language</Text><Image style={styles.optionImg3} source={require('./assets/arrow_forward.png')}></Image></TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{setVpolicy(!vpolicy)}} style={styles.option}><Text style={styles.optionTxt}>View Policies And Agreements</Text><Image style={styles.optionImg4} source={require('./assets/expand.png')}></Image></TouchableOpacity>
        
       
        </View>
        {vpolicy ? <ScrollView style={styles.policyV}><Text style={{padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Introduction :</Text>
        Welcome to [Your App Name], the language learning app designed to enhance your language skills in an interactive and engaging manner. This policy outlines the terms and conditions for using our app. By accessing or using [Your App Name], you agree to comply with and be bound by the terms of this policy.
        </Text>
        <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>User Accounts :</Text>
        Users must create an account to access certain features of the app.
        Users are responsible for maintaining the confidentiality of their account information.
        Users must provide accurate and complete information during the registration process.</Text>
        
        <Text style={{marginTop:15,padding:10}}> <Text style={{fontSize:17,fontWeight:'bold'}}>Content And Usage :</Text>
        [Your App Name] provides language learning content for educational purposes.
        Users are prohibited from using the app for any illegal or unauthorized purpose.
        Users must not attempt to disrupt the app's functionality or compromise its security.</Text>
       
        <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>User Conduct :</Text>
       Respectful and inclusive communication is expected within the app's community.
       Users must not engage in any form of harassment, hate speech, or discriminatory behavior.
       Inappropriate content, including but not limited to offensive language or materials, is strictly prohibited.</Text>
       
       <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Data Privacy :</Text>
        [Your App Name] values user privacy. Personal information is collected and processed in accordance with our Privacy Policy.
        Users have the right to control and manage their personal data through account settings.
        </Text>
       
        <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Intellectual Property :</Text>
        All content provided by [Your App Name] is protected by copyright and other intellectual property laws.
        Users may not reproduce, distribute, or create derivative works without explicit permission.
        </Text>
       
        <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Payment and Subscriptions :</Text>
        [Your App Name] may offer premium features through paid subscriptions.
        Users agree to pay all applicable fees associated with the selected subscription.
        </Text>
       
        <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Termination :</Text>
        [Your App Name] reserves the right to terminate or suspend user accounts for violations of this policy.
        Users may terminate their accounts at any time by following the app's provided procedures.
        {'/n'}</Text>
       
        <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Updates and Modifications :</Text> 
        Fluentify may update or modify this policy to reflect changes in features or legal requirements.
        Users will be notified of significant changes, and continued use of the app constitutes acceptance of the updated policy.
        </Text>
       
        <Text style={{marginTop:15,padding:10}}><Text style={{fontSize:17,fontWeight:'bold'}}>Contact Information :</Text>
        For questions or concerns regarding this policy, please contact Fluentify at zaminkazmi10192gmail.com.
        By using Fluentify, you agree to abide by the terms outlined in this policy. Thank you for choosing Fluentify as your language learning companion.
        </Text>
        <Text style={{marginTop:15,paddingLeft:10,paddingRight:10}}>Fluentify</Text>
        <Text style={{marginTop:0,paddingLeft:10,paddingRight:10}}>Commercial Block,Lahore,Pakistan</Text>
        <Text style={{marginTop:0,paddingLeft:10,paddingRight:10}}>ZaminKazmi1019@gmail.com</Text>
        <Text style={{marginTop:0,paddingLeft:10,paddingRight:10,paddingBottom:10}}>+923174457748</Text>
       </ScrollView> : null}

       
       
        </View>
        </ScrollView>
      )
}

export default Settings;

const styles=StyleSheet.create({
   container:{
    marginTop:0,
    backgroundColor:'#90FFDB',
    flex:1
   },
   topView:{
    display:'flex',
    flexDirection:'row',
    width:'45%',
    marginLeft:'30%',
    backgroundColor:'#C77DFF',
    marginTop:'7%',
    borderRadius:20
   },
   option:{
    display:'flex',
    flexDirection:'row',
    marginLeft:'10%',
    width:'55%',
    backgroundColor:'white',
    borderRadius:15,
    marginBottom:'8%'
   },
   optionTxt:{
    fontSize:18,
    marginLeft:10
   },
   optionImg1:{
    marginLeft:'20%',
    marginTop:'8%',
    marginRight:5
   },
   optionImg2:{
    marginLeft:'23%',
    marginTop:'4%',
    marginRight:5
   },
   optionImg3:{
    marginLeft:'35%',
    marginTop:'4%',
    marginRight:5
   },
   optionImg4:{
    marginLeft:'1%',
    marginTop:'8%',
    marginRight:5
   },
   backbtn:{
    width:'22%',
    marginLeft:'10%',
    backgroundColor:'#5A189A',
    borderRadius:20,
    marginTop:'68%',
    marginBottom:'15%'
},
backbtnTxt:{
    fontSize:20,
    color:'white',
    paddingLeft:13,
    paddingBottom:4,
    paddingTop:4,
    
},
policyV:{
    position:'relative',
    backgroundColor:'white',
    marginTop:'25%',
    marginLeft:'5%',
    marginRight:'5%'
}

})