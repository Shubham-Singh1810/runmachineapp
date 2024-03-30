import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Pressable
      onPress={()=>navigation.navigate('Feed')}
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
      onPress={()=>navigation.navigate('Explore')}
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
      onPress={()=>navigation.navigate('Create')}
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
      onPress={()=>navigation.navigate('Profile')}
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
            backgroundColor: 'red',
          }}
          source={{
            uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
          }}
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
