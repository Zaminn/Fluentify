import { ScrollView, useState } from "react-native";
import React from "react-native";
import { Image,Text,View,TextInput,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";




const Welcome=(props)=>{
    return (
      <View style={styles.container}>
  
      <View style={styles.main}>
  
      <View style={styles.img}>
      <Image
          source={require('./assets/Girl.png')} // Replace with your welcome image
          style={styles.image}
        ></Image></View>
        
       <View style={styles.rightText}>
       <ImageBackground style={styles.vector1} source={require('./assets/Vector.png')}><Text style={styles.img_txt}>Journey,Fluency,Mastery!</Text></ImageBackground>
       <ImageBackground style={styles.vector2} source={require('./assets/Vector.png')}><Text style={styles.img_txt}>Expand Your Horizons!</Text></ImageBackground>
       <ImageBackground style={styles.vector3} source={require('./assets/Vector.png')}><Text style={styles.img_txt}>Adventure Starts Now!</Text></ImageBackground>
       </View>
      </View>
  
        <Text style={styles.title}>Welcome to Fluentify!</Text>
       
        <TouchableOpacity
          style={styles.button}
          onPress={()=> props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor:'#E0AAFF',
    marginTop:0,
  },
  image: {
    width: 200,
    height: 520,
    marginBottom: 0,
    marginTop:2,
    marginLeft:110,
  
  },
  img:{
    alignItems:'right',
    
  },
  main:{
  display:'flex',
  flexDirection:'row',
  },
  img_txt:{
  color:"white",
  fontSize:14.5,
  },
  vector1:{
   width:200,
   height:50,
   marginRight:80,
   paddingTop:10
  },
  vector2:{
    width:200,
    height:50,
    marginRight:80,
    paddingTop:10
   },
   vector3:{
    width:200,
    height:50,
    marginRight:80,
    paddingTop:10
   },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 
  rightText:{
  paddingTop:120,
  
  },

  button: {
    backgroundColor: '#5A189A', // Replace with your desired button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});




export default Welcome;