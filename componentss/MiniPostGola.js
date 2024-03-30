import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import React from 'react';

const MiniPostGola = ({setShowMiniPost}) => {
  return (
    <Pressable onPress={()=>setShowMiniPost(false)} style={{marginRight: 20}}>
      <Image
        source={{
          uri: 'https://img.itinari.com/pages/images/original/9dbd040d-4be2-4595-a266-75659da5a9f2-istock-1164386039.jpg?ch=DPR&dpr=1&w=1200&h=800&s=964e54af85afff6d0e9e594a4943dc7b',
        }}
        style={{width: 150, aspectRatio: 4 / 3}}
      />
    </Pressable>
  );
};

export default MiniPostGola;

const styles = StyleSheet.create({});
