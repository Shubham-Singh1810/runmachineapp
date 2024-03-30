import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React,{useState} from 'react';
import PostGola from './PostGola';
import MiniPostGola from './MiniPostGola';

const PostByTag = () => {
    const [showMiniPost, setShowMiniPost] = useState(true);
  const tagArr = [
    'food',
    'gym',
    'travel',
    'news',
    'code',
    'fassion',
    'politics',
  ];
  const [showTagList, setShowTagList]=useState(false)
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
            #food
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
              #{v}
            </Text>
          );
        })}
      </View>}
      

      {showMiniPost ? (
        <ScrollView horizontal={true} style={{marginLeft: 16}}>
          <MiniPostGola setShowMiniPost={setShowMiniPost}/>
          <MiniPostGola setShowMiniPost={setShowMiniPost}/>
          <MiniPostGola setShowMiniPost={setShowMiniPost}/>
          <MiniPostGola setShowMiniPost={setShowMiniPost}/>
          <MiniPostGola setShowMiniPost={setShowMiniPost}/>
          <MiniPostGola setShowMiniPost={setShowMiniPost}/>
        </ScrollView>
      ) : (
        <ScrollView>
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
        </ScrollView>
      )}
    </View>
  );
};

export default PostByTag;

const styles = StyleSheet.create({});