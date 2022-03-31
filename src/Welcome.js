import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Button, Text, View, Alert, Image, TextInput,KeyboardAvoidingView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';



const Welcome = () => {

    const navigation = useNavigation();


    return (
    <View style={styles.MainContainer}>
  
        <View style={styles.VistaLogo}>
        <Image
          style={styles.tinyLogoBenvenuto}
          source={require('./assets/Logo2.png')}
        />
        </View>
 
          <View style={styles.Main}>
            <Text style={styles.Testo}>Benvenuto in Aton! 👋🏼 </Text>
          </View>
 
          <View style={styles.ViewDescription}>
          <Text style={styles.TestoProva}>Aton é un app per la gestione delle task giornaliere attant é npm nu ricchion testo di riempimento come se non ci fosse un domani test zio perone, negri al sugo volanti. </Text>
         </View>
 
          <View style={styles.ViewButton}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}          
            activeOpacity = { .5 }
            onPress={() =>navigation.navigate('Login')
           }
         >
              <Text style={styles.TextStyle}> Registrati </Text>
             
        </TouchableOpacity>
         </View>
       </View>
      );
    };

    export default Welcome;

    const styles = StyleSheet.create({
        MainContainer: {
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#F4F4F6',
        },
      
        VistaLogo: {
          flex: 1,
          justifyContent: 'center',
          paddingTop: 10,
          marginTop: 50,
        },
        
        tinyLogoBenvenuto: {
          resizeMode: 'stretch', 
          width: 114,
          height: 38,
        },
      
        Main: {
          width: 280,
          height: 115,
        },
      
        ViewDescription: {
          width: 280,
          height: 150,
          marginBottom: 200,
          marginTop: 10,
        },
      
        ViewButton: {
          marginBottom: 60,
        },
      
        Testo:{
          color:'#111111',
          textAlign:'left',
          fontSize: 48,
          fontWeight: 'bold',
          
      },
      TestoProva:{
        color:'#595757',
        textAlign:'left',
        fontSize: 16,
        fontWeight: 'normal',
      
      },
      
        SubmitButtonStyle: {
          elevation: 5,
          shadowColor: '#000000',
          width: 299,
          height: 54,
          paddingTop:15,
          paddingBottom:15,
          backgroundColor:'#0166FF',
          borderRadius:8,
          
          
        },
      
        TextStyle:{
            color:'#fff',
            textAlign:'center',
            fontSize: 18,
        },
        
      
      });
