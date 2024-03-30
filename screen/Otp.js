import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {verifyOtp, resendOtp} from '../services/user.services';
import ToastManager, {Toast} from 'toastify-react-native';
import { useRoute } from '@react-navigation/native';
const Otp = () => {
  const route = useRoute();
  const { email } = route.params; // Access the 'email' parameter
  const navigation = useNavigation();
  const [UserOtp, setUserOtp] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const handleOtpVerification = async text => {
    setUserOtp(text);
    if (text.length === 6) {
      setLoader(true);
      try {
        let response = await verifyOtp({
          Email: email,
          UserOtp: text,
        });
        if (response?.data?.status?.code == 200) {
          setLoader(false);
          navigation.navigate('Login', {email});
        }
        if (response?.data?.status?.code == 202) {
          setLoader(false);
          Toast.error('Wrong Otp');
        }
      } catch (error) {
        Toast.error('Internal server error');
      }
      
    } else {
      setError('Must be 6 digit number');
    }
  };
  const handleResendOtp = async text =>{
    try {
      setLoader(true);
      let response = await resendOtp({Email:email});
      if(response?.data?.data?.message=="OTP has been send to your email"){
        Toast.success('OTP has been send to your email');
        setLoader(false);
      }else{
        Toast.error('Something went wrong');
        setLoader(false);
      }
    } catch (error) {
      Toast.error('Internal server error');
      setLoader(false);
    }
  }
  return (
    <LinearGradient
      colors={['#b5d5fc', '#eef4fe', '#f4f8fc', '#fff']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '90%'}}>
        <View style={{alignItems: 'center', marginBottom: 35}}>
          <Image
            source={require('../images/brandlogo.png')}
            style={{
              height: 45,
              width: 250,
              marginBottom: 35,
              resizeMode: 'contain',
            }}
          />
          <Text style={{fontSize: 18, marginBottom: 15, fontWeight: '400'}}>
            OTP Verification
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 18, marginBottom: 5}}>Enter OTP</Text>
          <View
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              borderColor: '#2c2c2c',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="XXXXXX"
              style={{fontSize: 30}}
              onChangeText={text => handleOtpVerification(text)}
              maxLength={6}
              value={UserOtp}
              keyboardType="numeric"
            />
          </View>
          {error !== '' && (
            <Text style={{color: 'red', fontSize: 12}}>{error}</Text>
          )}
        </View>
        <Pressable onPress={handleOtpVerification}>
          <Text
            style={{
              color: '#11134e',
              fontWeight: '500',
              textDecorationLine: 'underline',
            }}>
            Verify OTP
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <Text style={{color: '#11134e'}}>Don't get OTP</Text>
          <Pressable onPress={handleResendOtp}>
          <Text
            style={{
              color: '#11134e',
              fontWeight: '500',
              textDecorationLine: 'underline',
            }}>
            Resend OTP
          </Text>
          </Pressable>
          
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          position: 'absolute',
          bottom: 0,
          margin: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 11}}>Your OTP has been sent to</Text>
        <Text style={{fontSize: 11, fontWeight: '600'}}>
          {email}
        </Text>
      </View>
      <Modal visible={loader} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      </Modal>
      <ToastManager />
    </LinearGradient>
  );
};

export default Otp;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#2c2c2c',
    borderRadius: 5,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '400',
  },
  labelText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  infoText: {
    color: 'black',
  },
});
