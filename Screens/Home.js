import React, { useState } from 'react';

import { ImageBackground, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import SignIn from './SignIn.js'


function Home({navigation}) {

    return (
        <Swiper horizontal={false}  loop ={false} showsPagination={false}> 
            <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <ImageBackground 
                style={{width: '100%', height: '100%', justifyContent: "center", alignItems: "center"}}
                source={require('../assets/flower.jpg')}>
                    <View style={{flex:2,justifyContent:"center"}}>
                        <Text style={styles.name}>Login App</Text>
                        <Text style={styles.description} >Swipe up..</Text>
                    </View>
                    <View style={{justifyContent:"flex-end",flex:1,alignContent:"center",paddingBottom:"3%"}}>  
                        <Text style={{fontWeight:"bold", color:"white",fontSize:20}}>Get Started</Text>
                        
                    </View>
                </ImageBackground>
            </SafeAreaView>
            {/* ****************************** */}
          <SignIn navigation = { navigation }/>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    name:{
        color:"white",
        fontSize:35,
        fontWeight:"bold",
        marginTop:"95%",
        alignSelf:"flex-start"
    },
    description:{
        color:"white",
        fontSize:20,
        marginLeft:"5%"
    },
})

export default Home;