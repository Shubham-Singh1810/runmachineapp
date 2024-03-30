import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Modal
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker from 'react-native-document-picker';
import {editProfile} from '../services/user.services';
import {useGlobalState} from '../GlobalProvider';
import ToastManager, {Toast} from 'toastify-react-native';
import {useNavigation} from '@react-navigation/native';


import { useRoute } from '@react-navigation/native';
const EditProfile = () => {
  const route = useRoute();
  const {userDetails} = route.params; // Access the 'email' parameter
  const navigation = useNavigation();
  const {globalState, setGlobalState} = useGlobalState();
  const [prevUri, setPrevUri] = useState(userDetails.ProfilePic);
  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images], // Specify the image type
      });
      setPrevUri(res[0].uri);
      setFormData({...formData, ProfilePic: res});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Error picking image:', err);
      }
    }
  };
  const [formData, setFormData] = useState({
    UserName: userDetails.UserName,
    Dob: userDetails.Dob,
    Bio: userDetails.Bio,
    Website: userDetails.Website,
    ProfilePic: "",
  });
  const [loader, setLoader] = useState(false);
  const handleEditProfile = async () => {
    setLoader(true)
    try {
      const newFormData = new FormData();
      newFormData.append('_id', globalState.userData._id);
      newFormData.append('UserName', formData.UserName);
      newFormData.append('Dob', formData.Dob);
      newFormData.append('Bio', formData.Bio);
      newFormData.append('Website', formData.Website);
      if(formData.ProfilePic){
        newFormData.append('ProfilePic', {
          uri: formData.ProfilePic[0].uri,
          type: formData.ProfilePic[0].type,
          name: formData.ProfilePic[0].name,
        });
      }
      let response = await editProfile(newFormData);
      if (response?.data?.data?.message == 'Users updated successfully!') {
        setLoader(false)
        Toast.success('Users updated successfully!');
        setTimeout(()=>{
          navigation.navigate('Profile')
        },1000)
      } else {
        setLoader(false)
        Toast.error('Something went wrong');
      }
    } catch (error) {
      setLoader(false)
      Toast.error('Internal server error');
    }
  };
  
  return (
    <>
    <LinearGradient
      colors={['#b5d5fc', '#eef4fe', '#f4f8fc', '#fff']}
      style={{flex: 1, padding: 15}}>
      <Pressable
        onPress={pickImage}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        {prevUri ? (
          <Image
            source={{uri: prevUri}}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
        ) : (
          <Image
            source={require('../images/dummyUser.png')}
            style={{height: 100, width: 100, borderRadius: 50}}
          />
        )}
        <Text style={styles.editText}>Edit Profile Pic</Text>
      </Pressable>
      <ScrollView style={{marginTop: 20}}>
        <View style={{marginBottom: 35, marginTop: 10}}>
          <Text style={styles.labelText}>User Name</Text>
          <TextInput
            style={[styles.inputBox]}
            placeholder=""
            onChangeText={text => setFormData({...formData, UserName: text})}
            value={formData.UserName}
          />
        </View>
        <View style={{marginBottom: 35}}>
          <Text style={styles.labelText}>Bio</Text>
          <TextInput
            style={[styles.inputBox]}
            placeholder=""
            multiline={true} // Allow multiple lines
            numberOfLines={3}
            onChangeText={text => setFormData({...formData, Bio: text})}
            value={formData.Bio}
          />
        </View>
        <View style={{marginBottom: 35}}>
          <Text style={styles.labelText}>Date Of Birth</Text>
          <TextInput
            style={[styles.inputBox]}
            placeholder=""
            onChangeText={text => setFormData({...formData, Dob: text})}
            value={formData.Dob}
          />
        </View>
        <View style={{marginBottom: 35}}>
          <Text style={styles.labelText}>Website</Text>
          <TextInput
            style={[styles.inputBox]}
            placeholder=""
            onChangeText={text => setFormData({...formData, Website: text})}
            value={formData.Website}
          />
        </View>
        <Button title="Update" color="#11134e" onPress={handleEditProfile} />
      </ScrollView>
    </LinearGradient>
     <Modal visible={loader} transparent={true} animationType='slide'>
     <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.3)", flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
     <ActivityIndicator size="large"/>
     </View>
   </Modal>
   <ToastManager />
   </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  editText: {
    color: '#11134e',
    fontSize: 12,
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginTop: 3,
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#2c2c2c',
    borderRadius: 5,
  },
  labelText: {
    color: 'black',
    fontSize: 14,
    position: 'absolute',
    top: -9,
    paddingHorizontal: 4,
    borderRadius: 3,
    left: 10,
    backgroundColor: '#eef4fe',
    zIndex: 1,
    display: 'flex',
    fontWeight: '400',
  },
});
