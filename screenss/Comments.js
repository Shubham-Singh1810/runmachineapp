import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CommentsGola from '../componentss/CommentsGola';
const Comments = () => {
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#fff', '#f4f8fc', '#eef4fe', '#b5d5fc']}
        style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            Comments
          </Text>
        </View>
        <ScrollView>
          <CommentsGola />
          <CommentsGola />
          <CommentsGola />
          <CommentsGola />
        </ScrollView>
        <View
          style={{
            borderWidth: 1,
            borderColor:"gray",
            borderRadius: 3,
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Add a Comment"
            multiline={true} // Allow multiple lines
            numberOfLines={3}
            style={{paddingHorizontal: 5, paddingVertical: 0, width: '85%', backgroundColor:"white"}}
          />
          <Pressable
            style={{
              backgroundColor: '#002852',
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:3,
            }}>
            <Text style={{color: 'white'}}>Send</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
