import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const StoryGola = () => {
  return (
    <View style={styles.main}>
      <View style={{borderWidth:3, borderRadius:40, borderColor:"orange"}}>
      <Image style={styles.image} 
      source={{
        uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
      }}
      />
      </View>
      <Text style={styles.nameText}>Raju Kumar...</Text>
    </View>
  );
};

export default StoryGola;

const styles = StyleSheet.create({
  main:{
    flexDirection:"column",
    margin:10,
    alignItems:"center"
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    padding:5,
    backgroundColor:"red"
  },
  nameText:{
    color:"#000",
    fontWeight:"500",
    marginTop:5
  }
});
