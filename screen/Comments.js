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
  import { useRoute } from '@react-navigation/native';
  const Comments = () => {
    const route = useRoute();
    const {postId} = route.params;
    console.warn(postId)
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
              flexDirection: 'row',
            }}>
            <TextInput
              placeholder="Add a Comment"
              multiline={true} // Allow multiple lines
              numberOfLines={3}
              style={{paddingHorizontal: 10, paddingVertical: 0, width: '85%', backgroundColor:"white"}}
            />
            <Pressable
              style={{
                backgroundColor: 'white',
                width: '15%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // borderRadius:3,
                borderLeftWidth:1
              }}>
                <Image source={require("../images/send.png")} style={{height:20, width:20, resizeMode:"contain"}}/>
              {/* <Text style={{color: 'white'}}>Send</Text> */}
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
  