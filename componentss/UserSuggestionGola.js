import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import React from 'react';

const UserSuggestionGola = () => {
  return (
    <View
      style={
        {
          flexDirection: "column",
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop:20,
          marginRight:20
        }
      }>
      <Image
        source={{
          uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
        }}
        style={{
          width: 120,
          borderRadius: 5,
          height: 150,
          resizeMode: 'cover',
        }}
      />
      <View>
        <Text style={{color: 'black', fontSize: 14,marginTop:3, fontWeight: '500'}}>
          Shubham Singh...
        </Text>
        <Pressable style={{backgroundColor:"#becce5",flexDirection:"row",marginTop:4, justifyContent:"center", paddingVertical:2}}>
            <Text style={{color:"black", fontWeight:"500"}}>Follow</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserSuggestionGola;

const styles = StyleSheet.create({});
