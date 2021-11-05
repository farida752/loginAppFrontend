
import { ImageBackground, TouchableOpacity, SafeAreaView, StyleSheet, Text,
     Platform, StatusBar, View, FlatList, Dimensions } from 'react-native';
import React from "react";
import useFetch from '../Components/UseFetch';
import Spinner from 'react-native-loading-spinner-overlay';
import User from '../Components/User';


function Accounts({navigation}) {

    const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
    const{error,onProcessing,data:accounts} = useFetch(baseUrl+ ':3333/show');
   
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/glitter.jpg')} style={styles.backgroundImage} >
                <View style={styles.upperSection}>
                    
                    <Text style={styles.title}>Accounts</Text>
                </View>
                <Spinner
                visible={onProcessing}
                textContent={'Loading...'}
                textStyle={{color: '#FFF'}}
                />
                
                <View>
                    <Text style={{color:"white"}}>{error}</Text>
                    <FlatList
            data={accounts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
            return (
            
              <User item={item} navigation = { navigation }/>
             
            )
            }}
          />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const WINDOW_HEIGHT = Dimensions.get('window').height;
const BOTTOM_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT;
const styles = StyleSheet.create({
    container : {
        fontFamily: 'Roboto',
        flex: 1,
        paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    title : {
        color: "rgba(228, 74, 125, 0.87)",
       fontSize: WINDOW_HEIGHT/20,
        fontWeight: 'bold',
    },
    upperSection : {
        flexDirection : 'row',
        padding : "5%",
        paddingBottom: "5%",
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
    },
});
export default Accounts;
