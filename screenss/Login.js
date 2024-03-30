import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const Login = () => {
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
              marginBottom: 40,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.titleText}>Log in to your account</Text>
        </View>

        <View style={{marginBottom: 20}}>
          <Text style={styles.labelText}>Email</Text>
          <View style={styles.inputBox}>
            <TextInput placeholder="abc@gmail.com" />
          </View>
        </View>
        <View style={{marginBottom: 35}}>
          <Text style={styles.labelText}>Password</Text>
          <View style={styles.inputBox}>
            <TextInput />
          </View>
        </View>
        <Button color="#11134e" title="Log in" />
        <View style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
          <Text style={styles.infoText}>Don't have any account?</Text>
          <Text style={{color:"#11134e", marginHorizontal:4, fontWeight:"500", textDecorationLine:"underline"}}>Create</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Login;

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
