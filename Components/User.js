import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image,Dimensions } from 'react-native';

function User({item,navigation}) {
    const WINDOW_WIDTH = Dimensions.get('window').width;

    const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
    const handleDelete = ()=> {
    fetch(baseUrl + ":3333/delete", {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify({
            email:item.email,          
        })
    })
  //  .then(()=> navigation.navigate("Accounts"));
    console.log("deleted");
}
    return (
        
            <View style={styles.item}>
                  <View style={{padding:'1.5%', flexDirection:'row', width : "100%"}}>  
                <View style={{padding:'1.5%', flexDirection:'column', width : "80%"}}>           
                    <Text numberOfLines={1} style={{ fontSize : WINDOW_WIDTH/25,paddingLeft:"4%", color: 'white'}}>{item.email}</Text>
                    <Text numberOfLines={1} style={{ fontSize : WINDOW_WIDTH/25,paddingLeft:"4%", color: 'white'}}>{item.password}</Text>
                    </View>
                    <TouchableHighlight onPress = {handleDelete}>
                        <Image style={{margin:20}} source={{
                                width:30,
                                height:30, 
                                uri:'https://www.iconsdb.com/icons/preview/barbie-pink/delete-xxl.png'
                            }}/>
                  </TouchableHighlight>
               
                </View>
                </View>                   
       

    );
}
const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        marginTop: 15,
        marginHorizontal : "5%"
    },
})

export default User;