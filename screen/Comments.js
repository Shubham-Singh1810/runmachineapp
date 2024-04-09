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
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CommentsGola from '../componentss/CommentsGola';
import {useRoute} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {getCommentList, createComment} from '../services/comment.services';
import {useGlobalState} from '../GlobalProvider';
const Comments = () => {
  const {globalState, setGlobalState} = useGlobalState();
  const route = useRoute();
  const {postId} = route.params;
  const [commentList, setCommentList] = useState([]);
  const handleGetCommentList = async () => {
    try {
      let response = await getCommentList(postId);
      setCommentList(response?.data?.data?.commentData);
    } catch (error) {
      console.log(error);
    }
  };
  const [formData, setFormData]=useState({
    Author:globalState?.userData?._id,
    Comment:""
  })
  const handleCreateComment = async ()=>{
    if(formData?.Comment){
      try {
        let response = await createComment(postId, formData);
        if(response.data.status.code==200){
          setFormData({...formData, Comment:""})
          handleGetCommentList();
        }
      } catch (error) {
        console.log(error)
      }
    }    
  }
  useFocusEffect(
    React.useCallback(() => {
      handleGetCommentList();
    }, []),
  );
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
          {commentList?.map((v, i) => {
            return <CommentsGola value={v} handleGetCommentList={handleGetCommentList}/>;
          })}
        </ScrollView>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Add a Comment"
            multiline={true} // Allow multiple lines
            numberOfLines={3}
            value={formData?.Comment}
            onChangeText={(text)=>setFormData({...formData, Comment:text})}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 0,
              width: '85%',
              backgroundColor: 'white',
            }}
          />
          <Pressable
          onPress={handleCreateComment}
            style={{
              backgroundColor: 'white',
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // borderRadius:3,
              borderLeftWidth: 1,
            }}>
            <Image
              source={require('../images/send.png')}
              style={{height: 20, width: 20, resizeMode: 'contain'}}
            />
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
