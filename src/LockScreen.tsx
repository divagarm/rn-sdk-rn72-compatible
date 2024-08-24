import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getDeviceDetailsApi, updateDeviceDetailsApi } from './api';

const styles = StyleSheet.create({
    circle:{
      width:175,
      height:175,
      borderRadius:100,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#FE295C'
    },
    container:{
      width:'100%',
      height:"100%",
      alignItems:'center',
      justifyContent:'center'
    },
    viewStyle: {
      position:"absolute",
  
      /*
       * backgroundColor:"black",
       * opacity:0.2,
       */
      zIndex:100,
      elevation: 100,
      width:'100%',
      height:'100%',
      top:100,
      alignItems:'center'
    }
    })
   
    const LockDeviceCommands = {
      unlock:  {
          "commands": {
            "mode": "unlock"
          }
        }
      ,
      lock:  {
          "commands": {
            "mode": "lock"
          }
        }
      }
      
    
    export const LockScreen = () => {
     const [lockDetails, setLockDetails] = React.useState<any>({});
     const lockStatus = lockDetails?.status?.mode?.type ?? "";
     const [loading , setLoading] = React.useState(false);
     const onPressButton = async ()=>{
      try{
        setLoading(true);
        await updateDeviceDetailsApi(lockStatus==="unlocked"?LockDeviceCommands.lock:LockDeviceCommands.unlock);
        await new Promise(resolve => setTimeout(resolve, 15000));
        setLockDetails (await getDeviceDetailsApi()); 
        setLoading(false);
      } catch(error){
        setLoading(false);
        console.log("Error in updating device details", error);
      }
     }

     React.useEffect(()=>{
     const getAndSetLockStatus =   async ()=>{
         setLockDetails (await getDeviceDetailsApi()); 
     }
     getAndSetLockStatus();
     },[])


  return (
    <View style={styles.container}>
      <View style = {styles.viewStyle}>
        <ActivityIndicator size = "large" animating = {loading} color = {"#000000"} />
      </View>
    <TouchableOpacity onPress={onPressButton}>
      <View style = {styles.circle}>
        <Text style={{fontSize:24}} >{lockStatus}</Text>
    </View>
    </TouchableOpacity>
    </View>
    );
}