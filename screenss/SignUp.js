import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = () => {
  return (
    <LinearGradient
      colors={['#b5d5fc', '#eef4fe', '#f4f8fc', '#fff']}
      style={styles.main}>
      <View style={[{width: '90%'}]}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image
            source={require('../images/logo.png')}
            style={{
              height: 45,
              width: 250,
              marginBottom: 35,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.titleText}>Create new account</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.labelText}>Name</Text>
          <View style={styles.inputBox}>
            <TextInput placeholder="King Kohli" />
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.labelText}>Email</Text>
          <View style={styles.inputBox}>
            <TextInput placeholder="abc@gmail.com" />
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.labelText}>Password</Text>
          <View style={styles.inputBox}>
            <TextInput />
          </View>
        </View>
        <View style={{marginBottom: 35}}>
          <Text style={styles.labelText}>Confirm Password</Text>
          <View style={styles.inputBox}>
            <TextInput />
          </View>
        </View>
        <Button color="#11134e" title="Sign Up" />
        <View style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <Text style={{color:"#11134e", marginHorizontal:4, fontWeight:"500", textDecorationLine:"underline"}}>Log in</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default SignUp

const styles = StyleSheet.create({
    main: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    inputBox: {
      borderWidth: 1,
      paddingHorizontal:10,
      borderColor:"#2c2c2c",
      borderRadius:5
    },
    titleText: {
      color: 'black',
      fontSize: 18,
      marginBottom:15,
      fontWeight:"400"
    },
    labelText:{
      color: 'black',
      fontSize: 18,
      marginBottom:5,
    },
    infoText:{
      color:"black"
    }
  });