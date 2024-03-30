import {ScrollView, StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StoryGola from '../componentss/StoryGola';
import PostGola from '../componentss/PostGola';
import PeopleSuggestion from '../componentss/PeopleSuggestion';
import Footer from '../componentss/Footer';
const Feed = () => {
  return (
    <>
    <View style={styles.main}>
      <LinearGradient
        colors={['#fff', '#f4f8fc', '#eef4fe', '#b5d5fc']}
        style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Image
            source={require('../images/brandlogo.png')}
            style={{
              height: 40,
              width: 165,
              resizeMode: 'contain',
            }}
          />
          <View>
            <Image source={require('../images/redHeart.png')} style={{height:22, width:22, resizeMode:"contain"}} />
            <View
              style={{
                position: 'absolute',
                left: 13,
                top: 12,
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 13,
                width: 13,
                borderRadius: 7,
              }}>
              <Text style={{color: 'black', fontSize: 10}}>3</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          <View>
            <ScrollView horizontal={true}>
              <StoryGola />
              <StoryGola />
              <StoryGola />
              <StoryGola />
              <StoryGola />
              <StoryGola />
              <StoryGola />
              <StoryGola />
            </ScrollView>
          </View>
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
          <PeopleSuggestion />
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
        </ScrollView>
      </LinearGradient>
    </View>
    <Footer/>
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
