import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostGola from './PostGola';

const TraindingPost = () => {
  return (
    <View style={{marginBottom:20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginLeft: 16,
        }}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
          Trainding Post
        </Text>
      </View>
      <PostGola />
      <PostGola />
      <PostGola />
      <PostGola />
      <PostGola />
      <PostGola />
    </View>
  );
};

export default TraindingPost;

const styles = StyleSheet.create({});
