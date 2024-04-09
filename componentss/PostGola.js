import {
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {save_unsave_post, like_unlike_post} from '../services/user.services';
import {useGlobalState} from '../GlobalProvider';
import {getPostById, deletePost} from '../services/post.services';
import ToastManager, {Toast} from 'toastify-react-native';
const PostGola = ({postValue}) => {
  const [value, setValue] = useState(postValue);
  const {globalState, setGlobalState} = useGlobalState();
  const [showLoader, setShowLoader] = useState(false);
  const [message, setMessage] = useState({
    text: '',
    show: false,
    color: '',
  });
  const handleSave = async () => {
    setShowLoader(true);
    try {
      let response = await save_unsave_post(
        value?._id,
        globalState?.userData?._id,
      );
      if (response?.data?.status?.code == 200) {
        setShowLoader(false);
        setTimeout(() => {
          setMessage({
            text: response?.data?.data?.message,
            show: true,
            color: 'green',
          });
        }, 1000);
        setTimeout(() => {
          setMessage({
            text: '',
            show: false,
            color: 'green',
          });
        }, 6000);
        getPostData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async () => {
    setShowLoader(true);
    try {
      let response = await like_unlike_post(
        value?._id,
        globalState?.userData?._id,
      );
      if (response?.data?.status?.code == 200) {
        setShowLoader(false);
        getPostData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigation = useNavigation();
  const [showActionPopUp, setShowActionPopUp] = useState(false);
  const getPostData = async () => {
    try {
      let response = await getPostById(value?._id);
      setValue(response?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeletePost = async id => {
    try {
      let response = await deletePost(id);
      if (response?.data?.status?.code == '200') {
        Alert.alert('Post deleted successfully.');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate('Profile', {userId: value?.Author?._id})
        }
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {value?.Author?.ProfilePic ? (
            <Image
              source={{
                uri: value?.Author?.ProfilePic,
              }}
              style={{
                width: 40,
                borderRadius: 20,
                height: 40,
                resizeMode: 'cover',
              }}
            />
          ) : (
            <Image
              source={require('../images/dummyUser.png')}
              style={{
                width: 40,
                borderRadius: 20,
                height: 40,
                resizeMode: 'cover',
              }}
            />
          )}

          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
              {value?.Author.FullName}
            </Text>
            <Text style={{color: 'gray', fontSize: 12}}>
              {value?.Author?.Followers?.length} followers
            </Text>
          </View>
        </View>
        {globalState?.userData?._id != value?.Author?._id && (
          <View>
            <Text style={{color: 'blue', fontWeight: '500'}}>
              {globalState?.userData?.Followings?.includes(value?.Author?._id)
                ? 'Following'
                : 'Follow'}
            </Text>
          </View>
        )}
      </Pressable>
      <View
      //  colors={['#fff', '#f4f8fc', '#b5d5fc', '#eef4fe']}
      >
        <Pressable
          style={{position: 'absolute', zIndex: 1, right: 15, top: 5}}
          onPress={() => setShowActionPopUp(true)}>
          <Text style={{fontWeight: '900', color: 'black'}}>. . .</Text>
        </Pressable>

        <Image
          source={{
            uri: value?.ImgUrl,
          }}
          style={{width: '100%', aspectRatio: 4 / 3}}
        />
      </View>
      <View style={{padding: 10}}>
        {message.show && (
          <View
            style={{
              top: -20,
              width: '110%',
              paddingHorizontal: 10,
              paddingVertical: 3,
              position: 'absolute',
              backgroundColor: 'white',
              zIndex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                color: message.color,
                fontWeight: '500',
              }}>
              {message?.text}
            </Text>
          </View>
        )}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Pressable onPress={handleLike}>
              {value?.Likes.includes(globalState?.userData?._id) ? (
                <Image
                  source={require('../images/redHeart.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'cover',
                    marginRight: 20,
                  }}
                />
              ) : (
                <Image
                  source={require('../images/heart.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'cover',
                    marginRight: 20,
                  }}
                />
              )}
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('Comments', {postId: value?._id})
              }>
              <Image
                source={require('../images/chat.png')}
                style={{
                  width: 28.5,
                  height: 28.5,
                  resizeMode: 'cover',
                  marginRight: 20,
                  marginTop: -2,
                }}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                Alert.alert(
                  'Feature under development. Stay tuned for updates.',
                )
              }>
              <Image
                source={require('../images/send.png')}
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: 'cover',
                  marginRight: 20,
                }}
              />
            </Pressable>
          </View>
          <Pressable onPress={handleSave}>
            {value?.SavedBy.includes(globalState?.userData?._id) ? (
              <Image
                source={require('../images/bookmark.png')}
                style={{
                  width: 21,
                  height: 21,
                  resizeMode: 'cover',
                }}
              />
            ) : (
              <Image
                source={require('../images/saveIcon.png')}
                style={{
                  width: 21,
                  height: 21,
                  resizeMode: 'cover',
                  // marginRight: 20,
                }}
              />
            )}
          </Pressable>
        </View>
        <View style={{margin: 5}}>
          <Text style={{color: 'black'}}>{value?.Likes?.length} likes</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: '500'}}>
              {value?.Author?.FullName}
            </Text>
            <Text style={{color: 'black', fontWeight: '400', marginLeft: 5}}>
              {value?.Caption}
            </Text>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate('Comments', {postId: value?._id})
            }>
            {value?.Commnets?.length == 0 ? (
              <Text>Be the first to leave a comment</Text>
            ) : (
              <Text>View all {value?.Commnets?.length} comments</Text>
            )}
          </Pressable>
        </View>
      </View>
      {/* action Modal popup */}
      <Modal visible={showActionPopUp} transparent={true} animationType="slide">
        <Pressable
          onPress={() => setShowActionPopUp(false)}
          style={{flexDirection: 'row', alignItems: 'flex-end', flex: 1}}>
          <Pressable
            onPress={() => setShowActionPopUp(true)}
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              elevation: 10,
              paddingTop: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 30,
              }}>
              <Pressable
                style={{
                  width: 80,
                  height: 3,
                  backgroundColor: 'gray',
                }}></Pressable>
            </View>
            {message.show && (
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 20,
                  fontSize: 13,
                  color: message.color,
                  fontWeight: '500',
                }}>
                {message?.text}
              </Text>
            )}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Pressable
                onPress={handleSave}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 17,
                }}>
                {value?.SavedBy.includes(globalState?.userData?._id) ? (
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../images/bookmark.png')}
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 5,
                        resizeMode: 'cover',
                      }}
                    />
                    <Text
                      style={{fontWeight: '400', color: 'black', fontSize: 16}}>
                      Saved
                    </Text>
                  </View>
                ) : (
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../images/saveIcon.png')}
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 5,
                        resizeMode: 'cover',
                      }}
                    />
                    <Text
                      style={{fontWeight: '400', color: 'black', fontSize: 16}}>
                      Save
                    </Text>
                  </View>
                )}
              </Pressable>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 17,
                }}>
                <Image
                  source={require('../images/send.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 5,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 16}}>
                  Share
                </Text>
              </Pressable>
              {globalState?.userData?._id != value?.Author?._id && (
                <Pressable
                  onPress={() =>
                    navigation.navigate('Profile', {userId: value?.Author?._id})
                  }
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 17,
                  }}>
                  <Image
                    source={require('../images/add.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 5,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text
                    style={{fontWeight: '400', color: 'black', fontSize: 16}}>
                    {globalState?.userData?.Followings?.includes(
                      value?.Author?._id,
                    )
                      ? 'Following'
                      : 'Follow'}
                  </Text>
                </Pressable>
              )}
              {globalState?.userData?._id == value?.Author?._id && (
                <Pressable
                  onPress={() => handleDeletePost(value?._id)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 17,
                  }}>
                  <Image
                    source={require('../images/delete.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 5,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text
                    style={{fontWeight: '400', color: 'black', fontSize: 16}}>
                    Delete
                  </Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
      <Modal visible={showLoader} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            // backgroundColor: 'rgba(0,0,0,0.3)',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <ActivityIndicator size="large" /> */}
        </View>
      </Modal>
      <ToastManager />
    </View>
  );
};

export default PostGola;

const styles = StyleSheet.create({});
