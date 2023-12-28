import  React, { useState , useEffect } from 'react'
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <View style={styles.dateTime}>
        <Text style={styles.date}>{date.toLocaleDateString()}</Text>
        <Text style={styles.time}>{date.toLocaleTimeString()}</Text>
        </View>
    )
}

export default DateTime;

const styles=StyleSheet.create({
    dateTime:{
        display:'flex',
        flexDirection:'colunm'
    }
    ,date:{
        fontSize:19,
        fontWeight:'bold'
    },
    time:{
        fontSize:17
    }
})