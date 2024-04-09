import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PostGola from './PostGola';
import {getPostByFilter} from '../services/post.services';
import {useFocusEffect} from '@react-navigation/native';
const TraindingPost = () => {
  const [postsList, setPostsList] = useState([]);
  const getMyPost = async () => {
    try {
      let response = await getPostByFilter({});
      setPostsList(response?.data?.data?.data?.sort((post1, post2) => {
        // Calculate the number of likes for each post
        const likesCount1 = post1.Likes.length;
        const likesCount2 = post2.Likes.length;
      
        // Compare the number of likes and return the comparison result
        // Sort in descending order (posts with more likes come first)
        return likesCount2 - likesCount1;
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getMyPost();
    }, []),
  );
  return (
    <View style={{marginBottom: 20}}>
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
      {postsList?.map((v, i) => {
        return <PostGola postValue={v} />;
      })}
    </View>
  );
};

export default TraindingPost;

const styles = StyleSheet.create({});
