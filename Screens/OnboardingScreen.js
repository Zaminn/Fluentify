import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";



const OnboardingScreen=()=>{
  const navigation=useNavigation();
    return(
       
      
      <Onboarding
      onSkip={()=>navigation.replace('Tabs')}
      onDone={()=>navigation.replace('Tabs')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image style={{width:'100%',height:300}} source={require('./assets/neww.jpg')} />,
          title: 'Explore Your Abilites',
          subtitle: 'There is always room to improve ',
        },
        {
          backgroundColor: '#fff',
          image: <Image style={{width:'100%',height:300}} source={require('/home/exe/Documents/native/Project2/Fluentify/Screens/assets/newwww.png')} />,
          title: 'Communicate Efficiently',
          subtitle: 'No Hesitations Left',
        },
        {
          backgroundColor: '#fff',
          image: <Image style={{width:'100%',height:300}}  source={require('./assets/newww.png')} />,
          title: 'Profile',
          subtitle: 'Customize Your Profile as your own choice',
        },
      ]}
    />
    )
}
export default OnboardingScreen;