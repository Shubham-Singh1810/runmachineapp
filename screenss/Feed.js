import {ScrollView, StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StoryGola from '../componentss/StoryGola';
import PostGola from '../componentss/PostGola';
import PeopleSuggestion from '../componentss/PeopleSuggestion';
const Feed = () => {
  return (
    <View style={styles.main}>
      <View
        // colors={['#fff', '#f4f8fc', '#eef4fe', '#b5d5fc']}
        style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          {/* <Image
            source={require('../images/logo.png')}
            style={{
              height: 40,
              width: 165,
              resizeMode: 'contain',
            }}
          /> */}
          <View>
            {/* <Image source={require('../images/darkBellIcon.png')} /> */}
            <View
              style={{
                position: 'absolute',
                left: 10,
                top: 12,
                backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 14,
                width: 14,
                borderRadius: 7,
              }}>
              <Text style={{color: 'white', fontSize: 10}}>3</Text>
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
          <PeopleSuggestion/>
          <PostGola />
          <PostGola />
          <PostGola />
          <PostGola />
        </ScrollView>
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
