import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {login} from '../services/user.services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGlobalState} from '../GlobalProvider';
import { useRoute } from '@react-navigation/native';
import ToastManager, { Toast } from 'toastify-react-native'
  
const Login = () => {
  const {globalState, setGlobalState} = useGlobalState();
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    Email: Yup.string().email('Invalid email').required('Email is required'),
    Password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  const [loader, setLoader] = useState(false);
  const handleSubmit = async values => {
    setLoader(true);
    try {
      let response = await login(values);
      if (response?.data?.data?.message == "logged in successfully") {
        await AsyncStorage.setItem(
          'userData',
          JSON.stringify(response?.data?.data?.userData?.loggedUser),
        );
        await AsyncStorage.setItem(
          'token',
          JSON.stringify(response?.data?.data?.userData?.token),
        );
        setGlobalState({
          ...globalState,
          userData: response?.data?.data?.userData?.loggedUser,
          token: response?.data?.data?.userData?.token,
        });
        setLoader(false);
      }
      if(response?.data?.data?.message=="Please Verify your Email!"){
        Toast.error('Please Verify your Email!');
        setTimeout(()=>{
          navigation.navigate('Otp', { email: values.Email });
        },1500)
        setLoader(false);
      }
      if(response?.data?.data?.message=="Invalid Userdetails"){
        setLoader(false);
        Toast.error('Invalid Userdetails');
      }
    } catch (error) {
      Toast.error('Internal server error!');
      setLoader(false);
    }
  };
  return (
    <>
      <LinearGradient
        colors={['#b5d5fc', '#eef4fe', '#f4f8fc', '#fff']}
        style={styles.main}>
        <Formik
          initialValues={{Email: '', Password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => {
            handleSubmit(values); // Call your custom handleSubmit function
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={[{width: '90%'}]}>
              <View style={{alignItems: 'center', marginBottom: 35}}>
                <Image
                  source={require('../images/brandlogo.png')}
                  style={{height: 45, width: 250, resizeMode: 'contain'}}
                />
                <Text
                  style={{fontSize: 18, marginBottom: 15, fontWeight: '400'}}>
                  Welcome Back
                </Text>
              </View>
              {/* Your form components here */}
              {/* Example for Email field */}
              <View style={{marginBottom: 20}}>
                <Text style={styles.labelText}>Email</Text>
                <View
                  style={[
                    styles.inputBox,
                    errors.Email && touched.Email && styles.borderRed,
                  ]}>
                  <TextInput
                    placeholder="abc@gmail.com"
                    onChangeText={handleChange('Email')}
                    onBlur={handleBlur('Email')}
                    value={values.Email}
                  />
                </View>
                {errors.Email && touched.Email && (
                  <Text style={{color: 'red'}}>{errors.Email}</Text>
                )}
              </View>
              {/* Password field and other form components */}
              <View style={{marginBottom: 40}}>
                <Text style={styles.labelText}>Password</Text>
                <View
                  style={[
                    styles.inputBox,
                    errors.Password && touched.Password && styles.borderRed,
                  ]}>
                  <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={handleChange('Password')}
                    onBlur={handleBlur('Password')}
                    value={values.Password}
                  />
                </View>
                {errors.Password && touched.Password && (
                  <Text style={{color: 'red'}}>{errors.Password}</Text>
                )}
              </View>
              {/* Submit button */}
              <Button color="#11134e" title="Log in" onPress={handleSubmit} />
              {/* Create account link */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 30,
                }}>
                <Text style={styles.infoText}>Don't have any account?</Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                  <Text
                    style={{
                      color: '#11134e',
                      marginHorizontal: 4,
                      fontWeight: '500',
                      textDecorationLine: 'underline',
                    }}>
                    Create
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </LinearGradient>
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
    </>
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
    marginBottom: 5,
  },
  infoText: {
    color: 'black',
  },
  borderRed: {
    borderColor: 'red',
  },
});
