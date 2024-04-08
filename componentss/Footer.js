import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import {useGlobalState} from '../GlobalProvider';
const Footer = () => {
  const {globalState, setGlobalState} = useGlobalState();
  const navigation = useNavigation();
  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images], // Specify the image type
      });
      navigation.navigate('Create', {res: res});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Error picking image:', err);
      }
    }
  };
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => navigation.navigate('Feed')}
        style={[
          {
            flexDirection: 'column',
            justifyContent: 'center',
            paddingHorizontal: 15,
            paddingVertical: 10,
            alignItems: 'center',
          },
          styles.selected,
        ]}>
        <Image
          source={require('../images/home.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'cover',
          }}
        />
        <Text style={{color: 'black', fontSize: 12, marginTop: 3}}>Home</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Explore')}
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/searchIcon.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'cover',
          }}
        />
        <Text style={{color: 'black', fontSize: 12, marginTop: 3}}>
          Explore
        </Text>
      </Pressable>
      <Pressable
        onPress={() => pickImage()}
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/tab.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'cover',
          }}
        />
        <Text style={{color: 'black', fontSize: 12, marginTop: 3}}>Create</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate('Profile', {userId: globalState?.userData?._id})
        }
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 22,
            width: 22,
            borderRadius: 11,
            padding: 2,
            // backgroundColor: 'red',
          }}
          source={
            globalState?.userData?.ProfilePic
              ? {uri: globalState.userData.ProfilePic}
              : require('../images/dummyUser.png')
          }
        />
        <Text style={{color: 'black', fontSize: 12, marginTop: 3}}>
          Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  main: {
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selected: {
    borderTopColor: '#002852',
    borderTopWidth: 2.5,
    backgroundColor: '#f7f8f9',
  },
});
