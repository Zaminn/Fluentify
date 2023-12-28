import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CalendarPicker from "react-native-calendar-picker";
import { useNavigation } from "@react-navigation/native";
// import { auth } from "../firebase";
import axios from "axios";
import NumberInput from "../components/NumberInput";
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";


const EditProfile = ({route},props) => {

  const [name,setName]=useState('')  
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [birthdate, setBirthdate] = useState("");
  const [image,setImage]=useState('');
  const[activity,setActivity]=useState(false);
  const[save,setSave]=useState(false);

  const[old,setOld]=useState(false);

 const [public_id,setPublic_id]=useState();
 const [public_url,setPublic_url]=useState();

  const username=route.params?.user_name;
    const age=route.params?.age;
   
    const firsturl=route.params?.public_url;
    console.log(firsturl)
    const [bdate,setBdate]=useState(age)
    console.log("here",bdate)
    const Timer=()=>{
      const timer=setTimeout(() => {
        navigation.navigate("Profile");
      },2000);
      return ()=>{clearTimeout(timer)}
    }
    const Timer1=()=>{
      const timer=setTimeout(() => {
        Alert.alert("Success","New Profile Picture Updated")
      },4000);
      return ()=>{clearTimeout(timer)}
    }


    const handleIncrement = () => {
      const newValue = String(parseInt(bdate, 10) + 1);
      setBdate(newValue);
    };
  
    const handleDecrement = () => {
      const newValue = String(Math.max(parseInt(bdate, 10) - 1, 0));
      setBdate(newValue);
    };
    const handleChangeText = (input) => {
      // Validate input to ensure it's a valid number (you can add more validation as needed)
      const newValue = input.replace(/[^0-9]/g, ''); // Allow only numeric characters
      setBdate(newValue);
    };
 


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setOld(true);
      console.log(result.assets[0].uri);
      let newFile={
          uri:result.assets[0].uri,
          type:`test/${result.assets[0].uri.split(".")[1]}`,
          name:`test.${result.assets[0].uri.split(".")[1]}`
      }
      setActivity(true);
      handleUpload(newFile);
     
    }
  };


  handleUpload=(image)=>{
    const data=new FormData()
    data.append('file',image);
    data.append("upload_preset","ml_default")
    data.append("cloud_name","dwjltsnvn");

    fetch('https://api.cloudinary.com/v1_1/dwjltsnvn/image/upload',{
      method:"post",
      body:data
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      console.log(data.url);
      console.log(data.public_id)
      setPublic_id(data.public_id);
      setPublic_url(data.url);
      console.log("hi",public_id,public_url)
      setActivity(false)
    })
    
    .catch(err=>console.log(err))
  }


 
  const handleDate = (date) => {
    // setBdate(date);
    let dt = new Date(date);
    let mon = dt.getMonth();
    mon += 1
    //console.log(dt.getDate()+"/"+mon+"/"+dt.getFullYear());
    setBirthdate(dt.getDate()+"/"+mon+"/"+dt.getFullYear()); 

    };

    const updateData=()=>{
      setSave(true);
      const axiosInstance=axios.create({
        baseURL:'http://192.168.114.150:3000',
        headers:{
          'Content-Type':'application/json'
        },
      });
      axiosInstance.post('/UpdateUser',{username,bdate,public_id,public_url})
      .then( (response)=>{
        console.log(response)
        if(response.data.success===true){
          setSave(false)
          Alert.alert("Success","Account Updated")
          Timer();
         

        }
      })
      .catch((error)=>{
        console.log(error,"err")
      })
    }
    useFocusEffect(
      React.useCallback(() => {
        setActivity(false)
        setSave(false)
       
       
  
        // Optionally, you can run some code when the screen gains focus
  
        return () => {
          console.log('Screen unfocused');
          // Optionally, you can run some code when the screen loses focus
        };
      }, [])
    );
    

  return (
    <ScrollView style={styles.container}>
      <View >
        <View style={styles.topView}>
          <Text style={styles.Editxt}>Edit Your Profile</Text>
          <Image source={require("./assets/edit.png")}></Image>
        </View>
        
          <Image
            source={!old ? {uri:firsturl}: {uri:image}}
            style={{
              width: 150,
              height: 150,
              marginLeft: "27%",
              marginTop: "8%",
              borderRadius: 70,
            }}
          />
        
        <TouchableOpacity style={styles.newPic} onPress={pickImage}>
          <Text style={styles.newPictxt}>
            {" "}
            Profile Picture{"\n"}Select A New Picture
          </Text>
        </TouchableOpacity>
        {activity? <ActivityIndicator size="large" color='#0000ff'/> : null}

        <View style={styles.namefield}>
          <Text style={styles.nametxt}>Name: {username}</Text>
            </View>

           <View style={{flexDirection:'row',marginTop:'5%',marginLeft:'25%'}}>
           <Text style={{fontSize:19}}>Age:   </Text>

           <View style={{flexDirection:'row'}}>
            
           <TouchableOpacity onPress={handleDecrement}><Text style={{fontSize: 24,
             paddingHorizontal: 10,
             color: 'blue',}}>-</Text></TouchableOpacity>

           <TextInput  keyboardType="numeric"  onChangeText={handleChangeText}>{bdate} </TextInput>

           <TouchableOpacity onPress={handleIncrement}><Text style={{fontSize: 24,
             paddingHorizontal: 10,
             color: 'blue',}}>+</Text></TouchableOpacity>
           </View>
           </View>

        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}
          style={styles.bfield}
        >
          <Text style={{ fontSize: 19 }}>BirthDate:  {birthdate}</Text>
          
          <Image source={require("./assets/expand.png")}></Image>
        </TouchableOpacity>
        {show ? (
          <View>
            <CalendarPicker onDateChange={handleDate} />
          </View>
        ) : null}

        <TouchableOpacity style={styles.saveBtn} onPress={updateData}>
          <Text style={styles.saveBtntxt}>Save</Text>
          <Image source={require("./assets/how_to_reg.png")}></Image>
        </TouchableOpacity>
        {save? <ActivityIndicator size="large" color='#0000ff'/> : null}
        
      </View>
    </ScrollView>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#80FFDB",
    flex: 1,
    marginTop: 0,
  },
  topView: {
    display: "flex",
    flexDirection: "row",
    marginTop: "7%",
    alignItems: "center",
    marginLeft: "20%",
    backgroundColor: "#C77DFF",
    width: "62%",
    height: "auto",
    borderRadius: 15,
  },
  newPic: {
    marginLeft: "30%",
    backgroundColor: "#D9D9D9",
    width: "40%",
    marginTop: "5%",
    borderRadius: 10,
    padding: 4,
  },
  newPictxt: {
    fontSize: 13,
  },
  Editxt: {
    fontSize: 25,
    padding: 10,
    color: "white",
  },
  userImg: {
    marginTop: "8%",
    marginLeft: "30%",
  },

  namefield: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20%",
    marginTop: "9%",
  },
  nametxt: {
    fontSize: 19,
    marginRight: 10,
  },
  nameinpt: {
    backgroundColor: "#D8D8D8",
    color: "black",
    width: 120,
    padding: 3,
    paddingBottom: 1,
    fontSize: 17,
  },
  agetxt:{
    alignItems:'center',
    marginLeft:'27%',
    fontSize:19
  },
  bfield: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20%",
    marginTop: "9%",
  },
  saveBtn: {
    marginLeft: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "25%",
    backgroundColor: "#CD7CFF",
    borderRadius: 15,
    marginTop: "5%",
    marginBottom:'5%'
  },
  saveBtntxt: {
    color: "white",
    padding: 10,
    fontSize: 15,
  },
  backbtn: {
    width: "22%",
    marginLeft: "10%",
    backgroundColor: "#5A189A",
    borderRadius: 20,
  },
  backbtnTxt: {
    fontSize: 20,
    color: "white",
    paddingLeft: 13,
    paddingBottom: 4,
    paddingTop: 4,
  },
});
