import { SafeAreaView ,Text,TextInput,Pressable ,StyleSheet,StatusBar,Platform,View,Image,TouchableHighlight,ImageBackground} from "react-native";
import React from "react";
import * as Google from 'expo-google-app-auth' ;
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

import { Ionicons } from "react-icons/fa";
const SignIn = ({navigation}) => {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [googleAuth,setGoogleAuth]=React.useState(false);
    const [hidePassword,setHidePassword] = React.useState(true);

    const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
   const handleLogin = ()=> {
    fetch(baseUrl + ":3333/signin", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify({
            email:email,          
            password: password,
            googleAuth : googleAuth
        })
       
    })
    .catch(err => {       
        console.log(err.message);
      })
      
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .then((res)=>validSigning(res));
}
const validSigning = (res)=>{
    //if(res.status  == true){
    navigation.navigate("Accounts");
/*}else{
    showMessage({
        message: res.msg,
        type: "Fail",
      });
    
}*/
}
const handleSignup = ()=> {
    fetch(baseUrl + ":3333/signup", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify({
            email:email,          
            password: password,
            googleAuth : false
        })
       
    })
    .catch(err => {       
        console.log(err.message);
      })
      
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .then((res)=>validSigning(res));
}
const handleGoogleSignin = ()=> {
    setGoogleAuth(true);
    const config = {iosClientId:`931058584633-aehatkf77qgct4kf7oft95sa6tal2jhh.apps.googleusercontent.com`,
            androidClientId:`931058584633-124i06spp5g2a1qk6ujjovc0chmcrt2r.apps.googleusercontent.com`,
            scope:['profile', 'email']
        };
   Google
   .logInAsync(config)
   .then((result)=>{
       const{type,user} = result;
       if(type == 'success'){
            const {email} = user;
            showMessage({
                message: "Google signin successfully",
                type: "Sucess",
              });
            
            setTimeout(() => {
                setEmail(email);
                handleSignup();
                navigation.navigate("Accounts");
            }, 1000);
       }else{
        showMessage({
            message: "Google signin was cancelled",
            type: "Fail",
          });
        
       }
       setGoogleAuth(false);
   })
   .catch((error)=>{
       console.log(error);
       showMessage({
        message: "An error occurred . check your network and try again",
        type: "Error",
      });
      setGoogleAuth(false);
    })
}
   
    return (
        <SafeAreaView style={styles.container}>
    <ImageBackground source={{

  uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzdh-K5nQFKT2TQaQa4XRbgF_aV9gicrt9Q&usqp=CAU'
   }} resizeMode="cover" style={styles.backgroundImage}> 


 <View styles={styles.viewTitle}>
 <Image style={{marginLeft: '40%',marginTop:'25%'}} source={{
        width:60,
        height:60,
        uri:'https://www.nicepng.com/png/full/138-1388174_login-account-icon.png'
     }}/>

  <Text style={styles.title}> LOGIN </Text>
</View>

 <View style= {styles.inputView} >
 <Image style={{marginRight:20}} source={{
     width:40,
     height:40,
     uri:'https://www.nicepng.com/png/full/138-1388174_login-account-icon.png'}}/>

 <TextInput  onChangeText={(val) =>setEmail(val)} style={styles.input} placeholder="E-mail"></TextInput>
 </View>

 <View style= {styles.inputView} >
 <Image style={{marginRight:20}} source={{
     width:40,
     height:40,
     uri:'https://d32a1iuc7x840y.cloudfront.net/0/3176/6a5a0be2-6f43-42d7-84e9-a63140f3251c.png'}}/>
  

<TextInput  secureTextEntry={hidePassword} onChangeText={(val) =>setPassword(val)} style={styles.input} placeholder="Password"></TextInput>


 </View>
 
  
  <Pressable  onPress= {handleLogin} style={styles.submit}> 
  <Text style={styles.button}>LogIn</Text>
  </Pressable >

  <Pressable  onPress= {handleSignup} style={styles.submit}> 
  <Text style={styles.button}>SignUp</Text>
  </Pressable >
 <View style={styles.horiContainer}>
     <TouchableHighlight onPress={()=>console.log("facebook pressed")}>
     <Image style={{margin:20}} source={{
        width:60,
        height:60,
  
      uri:'https://www.iconsdb.com/icons/preview/barbie-pink/github-10-xxl.png'
     }}/>
     </TouchableHighlight>
     <TouchableHighlight onPress = {handleGoogleSignin}>
      <Image style={{margin:20}} source={{
        width:60,
        height:60,
    
     uri:'https://www.iconsdb.com/icons/preview/barbie-pink/google-plus-4-xxl.png'

     }}/>
     </TouchableHighlight>
 </View>

 <FlashMessage position="top" /> 
 </ImageBackground>
        </SafeAreaView>
      );
}
 
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        
    },
    backgroundImage:{
        flex: 1,
        width:'100%',
        height:'100%',
    },
    viewTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily:'Cursive',
    },
    title:{
        fontSize : 50,
        color : 'white',
        marginLeft: '28%',
        marginBottom:20,
    },
   
    inputView: {
     flexDirection:'row', 
      height: 60,
      marginLeft: '15%',
      marginBottom:20,
      borderWidth: 1,
      padding: 10,
      color:'white',
      fontSize:30,
      borderColor:'white',
      width : '70%',
     
    },
    input:{
        color:'white',
        fontSize:20,
    },
    horiContainer:{
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit:{
        marginLeft: '15%',
        backgroundColor: 'rgba(228, 74, 125, 0.342)',
        width:'70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'white',
        borderBottomWidth:1,
        marginBottom:'5%',

    },
    button:{
        fontSize:30,
        color:'white',
      
    },
    passIcon:{
       
    }
   
  });
export default SignIn;