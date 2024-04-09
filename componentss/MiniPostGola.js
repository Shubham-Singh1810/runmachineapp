import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import React from 'react';

const MiniPostGola = ({setShowMiniPost, value}) => {
  return (
    <Pressable onPress={()=>setShowMiniPost(false)} style={{marginRight: 20}}>
      <Image
        source={{
          uri: value?.ImgUrl,
        }}
        style={{width: 150, aspectRatio: 4 / 3}}
      />
    </Pressable>
  );
};

export default MiniPostGola;

const styles = StyleSheet.create({});
