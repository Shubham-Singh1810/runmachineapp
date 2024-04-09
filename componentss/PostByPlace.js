import {
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PostGola from './PostGola';
import {useFocusEffect} from '@react-navigation/native';
import MiniPostGola from './MiniPostGola';
import {getPlaceList} from '../services/place.services';
import {getPostByFilter} from '../services/post.services';
const PostByPlace = () => {
  const [showMiniPost, setShowMiniPost] = useState(true);
  const [placeArr, setPlaceArr] = useState([]);
  const [showTagList, setShowTagList] = useState(false);
  const [postsList, setPostsList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');
  const getMyPost = async query => {
    try {
      let response = await getPostByFilter(query);
      setPostsList(response?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetLocationList = async () => {
    try {
      let response = await getPlaceList();
      if (
        response?.data?.data?.message == 'Location list retrieved successfully!'
      ) {
        let placeArr = response?.data?.data.data?.map(item => ({
          label: item.Location,
          value: item._id,
        }));
        setPlaceArr(placeArr);
        getMyPost({LocationId: placeArr[0].value});
        setSelectedPlace(placeArr[0].label);
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      handleGetLocationList();
    }, []),
  );
  return (
    <View style={{marginBottom: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            //   justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            Post by place
          </Text>
          <Text
            style={{
              backgroundColor: '#002852',
              color: 'white',
              paddingHorizontal: 5,
              marginLeft: 3,
              borderRadius: 3,
            }}>
            #{selectedPlace}
          </Text>
        </View>
        <Pressable
          onPress={() => setShowTagList(!showTagList)}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          {!showTagList ? (
            <Image
              style={{height: 20, width: 20, resizeMode: 'contain'}}
              source={require('../images/down.png')}
            />
          ) : (
            <Image
              style={{height: 12, width: 12, resizeMode: 'contain'}}
              source={require('../images/upload.png')}
            />
          )}
        </Pressable>
      </View>
      {showTagList && (
        <View
          style={{
            flexDirection: 'row',
            margin: 16,
            flexWrap: 'wrap', // Wrap items to the next line when needed
            maxWidth: '100%',
          }}>
          {placeArr?.map((v, i) => {
            return (
              <Pressable
                onPress={() => {
                  getMyPost({LocationId: v?.value}), setSelectedPlace(v?.label);
                }}>
                <Text
                  style={{
                    backgroundColor: '#becce5',
                    color: 'black',
                    paddingHorizontal: 7,
                    marginHorizontal: 7,
                    marginVertical: 5,
                    borderRadius: 3,
                    fontWeight: '500',
                  }}>
                  #{v?.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
      {showMiniPost ? (
        <ScrollView horizontal={true} style={{marginLeft: 16}}>
          {postsList?.map((v, i) => {
            return <MiniPostGola setShowMiniPost={setShowMiniPost} value={v} />;
          })}
        </ScrollView>
      ) : (
        <ScrollView>
          {postsList?.map((v, i) => {
            return <PostGola postValue={v}/>;
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default PostByPlace;

const styles = StyleSheet.create({});
