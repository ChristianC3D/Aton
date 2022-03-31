import * as React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Button, Text, View, Alert, Image, TextInput,KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Login = () => {
  return (
    
      <View
       style = {styles.container}>
      
          {/*  VISTA SPAZIO DISPONIBILE PER IL LOGO */}
      
          <View style = {styles.top}>
              <View style = {{marginTop: 90}}>
              <Text style = {{fontSize: 48, fontWeight: "bold", alignContent: "stretch"}}>Registrati✏️ </Text>
            </View>
      
                 {/* VISTA SPAZIO COMMENTO */}
      
            <View style = {{}}>
              <Text style = {{fontSize: 16, alignContent: "stretch", color: "#595757"}}>Inserisci qui le tue credenziali</Text>
            </View>
          </View>
      
                {/* VISTA SPAZIO DISPONIBILE PER LA REGISTRAZIONE */}
      
          <View
         
           style = {styles.register}>
      
                {/* VISTA SPAZIO INPUTTEXT EMAIL */}
      
            <View
             style = {{height: 80, marginTop: 30}}>
              <TextInput style = {styles.inputText} placeholder='Inserisci la tua mail'/>
            </View>
      
      
                  {/* VISTA SPAZIO INPUTTEXT PASSWORD */}
      
            <View
             style = {{height: 80, marginTop: 15}}> 
              <TextInput style= {styles.inputText} placeholder='Inserisci la tua password'/>
              
            </View>
            <View
             style = {{alignContent: "center", alignItems: "center", marginTop: 5}}>
              <Text style = {{fontSize: 14, fontWeight: "normal", color: "#58616A"}}>oppure</Text>
            </View>
          </View>
          
      
                {/* VISTA SPAZIO  DISPONIBILE PER ACCEDERE CON SERVIZI */}
      
      
          <View
         
           style = {styles.accedi}>
      
              {/* VISTA ACCEDI CON GOOGLE */}
      
      
            <View
             style = {{height: 54, marginTop: -35}}>
            <TouchableOpacity
                style={{ width: 299, height: 54, alignItems: "center",borderRadius:8, borderRadius:8, paddingVertical:10, flexDirection: 'row', backgroundColor: '#fff' }}
                onPress={() => this.signInFacebook(context.updateAuthUser)}>
                  <Image
                  style = {{width: 24, height: 20, marginRight: 40, marginLeft: 35}}
                  source = {require("./assets/logo_google.png")}
                  />
                <Text style={{color: '#243443'}}>Accedi con Google </Text>
      </TouchableOpacity>
            </View>
      
              {/* VISTA ACCEDI CON FACEBOOK */}
      
      
            <View
             style = {{height: 54, marginTop: 40}}>
            <TouchableOpacity
                style={{width: 299, height: 54, alignItems:"center",borderRadius:8, paddingVertical:10, flexDirection: 'row', backgroundColor: '#fff' }}
                onPress={() => this.signInFacebook(context.updateAuthUser)}>
                  <Image
                  style = {{width: 19, height: 19, marginRight: 43, marginLeft: 37}}
                  source = {require("./assets/logo_facebook.png")}
                  />
                <Text style={{color: '#243443'}}>Accedi con Facebook </Text>
      </TouchableOpacity>
            </View>
          </View>
      
              {/* VISTA SPAZIO DISPONIBILE PER BOTTOM */}
        <View
            style={styles.viewButton}>
         <TouchableOpacity
           style = {styles.button}          
           activeOpacity = { .5 }
        >
             <Text style={styles.textStyle}> Iscriviti </Text>
        </TouchableOpacity>
        </View>

        </View>
        );
};

const styles = StyleSheet.create({
  
    container : {
      flex: 1,
      alignItems: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#F4F4F6"
    },
    top: {
      height: 20,
      flex: 1,
      justifyContent: 'center',
    },
    register : {
      marginTop: 15,
      height: '40%',
      alignContent : "center"
    },
    accedi : {
      height: '20%',
    },
  
    button: {
      justifyContent:'center',
      alignItems:'center',
      borderRadius:15,
      elevation: 5,
      shadowColor: '#000000',
      width: 299,
      height: 54,
      backgroundColor:'#0166FF',
      borderRadius:8,
    },
    inputText: {
      paddingLeft: 10,
      justifyContent:'center',
      alignItems:'stretch',
      backgroundColor:'#fff',
      borderRadius:8,
      width: 299,
      height: 54,
    },
    viewButton: {
      marginBottom: 60,
    },
      textStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 18,
  },
});

export default Login;