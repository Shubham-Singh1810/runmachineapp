import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Otp = () => {
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
        <Text style={styles.titleText}>OTP Verification</Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={styles.labelText}>Enter OTP</Text>
        <View style={styles.inputBox}>
          <TextInput placeholder="XXXXXX" style={{fontSize:30}}/>
        </View>
      </View>
     
      {/* <Button color="#11134e" title="Sign Up" /> */}
      <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:30}}>
        <Text style={styles.infoText}>Don't get OTP</Text>
        <Text style={{color:"#11134e", marginHorizontal:4, fontWeight:"500", textDecorationLine:"underline"}}>Resend OTP</Text>
      </View>
      
    </View>
    <View style={{flexDirection:"column", position:"absolute",bottom:0, margin:15, justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:10}}>Your otp has been sent to</Text>
      <Text style={{fontSize:10, fontWeight:"600"}}>hittheshubham1810@gmail.com</Text>
      </View>
  </LinearGradient>
  )
}

export default Otp

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
      marginBottom:10,
    },
    infoText:{
      color:"black"
    }
  });