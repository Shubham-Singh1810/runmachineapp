import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React,{useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import PostGola from './PostGola';
import MiniPostGola from './MiniPostGola';
import {getTagList} from '../services/tag.services';
import {getPostByFilter} from '../services/post.services';
const PostByTag = () => {
  const [showMiniPost, setShowMiniPost] = useState(true);
  const [tagArr, setTagArr] = useState([]);
  const [showTagList, setShowTagList]=useState(false);
  const [postsList, setPostsList] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const getMyPost = async query => {
    try {
      let response = await getPostByFilter(query);
      setPostsList(response?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetTagList = async () => {
    try {
      let response = await getTagList();
      if (
        response?.data?.data?.message == 'Tag list retrieved successfully!'
      ) {
        let tagArr = response?.data?.data.data?.map(item => ({
          label: item.Tag,
          value: item._id,
        }));
        setTagArr(tagArr);
        getMyPost({TagId: tagArr[0].value});
        setSelectedTag(tagArr[0].label);
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      handleGetTagList();
    }, []),
  );
  return (
    <View style={{marginBottom:20}}>
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
            Post related to
          </Text>
          <Text
            style={{
              backgroundColor: '#002852',
              color: 'white',
              paddingHorizontal: 5,
              marginLeft: 3,
              borderRadius: 3,
            }}>
            #{selectedTag}
          </Text>
        </View>
        <Pressable onPress={()=>setShowTagList(!showTagList)} style={{flexDirection: 'row', alignItems: 'center'}}>
        {!showTagList ?
             <Image style={{height:20, width:20, resizeMode:"contain"}}
              source={require('../images/down.png')} />
              :<Image style={{height:12, width:12, resizeMode:"contain"}}
               source={require('../images/upload.png')}
                />}
        </Pressable>
      </View>
      {showTagList && <View
        style={{
          flexDirection: 'row',
          margin: 16,
          flexWrap: 'wrap', // Wrap items to the next line when needed
          maxWidth: "100%",
        }}>
        {tagArr?.map((v, i) => {
          return (
            <Pressable
                onPress={() => {
                  getMyPost({TagId: v?.value}), setSelectedTag(v?.label);
                }}>
                   <Text
              style={{
                backgroundColor: '#becce5',
                color: 'black',
                paddingHorizontal: 7,
                marginHorizontal: 7,
                marginVertical:5,
                borderRadius: 3,
                fontWeight: '500',
              }}>
              #{v?.label}
            </Text>
                </Pressable>
           
          );
        })}
      </View>}
      

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

export default PostByTag;

const styles = StyleSheet.create({});
