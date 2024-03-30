import {StyleSheet, Image, Text, View, Pressable, Modal} from 'react-native';
import React,{useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
const PostGola = () => {
  const navigation = useNavigation();
  const [showActionPopUp, setShowActionPopUp]=useState(false)
  return (
    <View>
      <View
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
          <Image
            source={{
              uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
            }}
            style={{
              width: 40,
              borderRadius: 20,
              height: 40,
              resizeMode: 'cover',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
              Shubham Singh
            </Text>
            <Text style={{color: 'gray', fontSize: 12}}>718 followers</Text>
          </View>
        </View>
        <Pressable>
          <Text style={{color: 'blue', fontWeight: '500'}}>Follow</Text>
        </Pressable>
      </View>
      <View
      //  colors={['#fff', '#f4f8fc', '#b5d5fc', '#eef4fe']}
      >
        <Pressable style={{position: 'absolute', zIndex: 1, right: 15, top: 5}} onPress={()=>setShowActionPopUp(true)}>
          <Text style={{fontWeight: '900', color: 'black'}}>. . .</Text>
        </Pressable>

        <Image
          source={{
            uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
          }}
          style={{width: '100%', aspectRatio: 4 / 3}}
        />
      </View>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require("../images/heart.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'cover',
                marginRight: 20,
              }}
            />
            <Pressable onPress={()=>navigation.navigate('Comments')}>
            <Image
              source={require("../images/chat.png")}
              style={{
                width: 28.5,
                height: 28.5,
                resizeMode: 'cover',
                marginRight: 20,
                marginTop:-2
              }}
            />
            </Pressable>
            <Image
              source={require("../images/send.png")}
              style={{
                width: 23,
                height: 23,
                resizeMode: 'cover',
                marginRight: 20,
              }}
            />
          </View>
          <View>
          <Image
              source={require("../images/saveIcon.png")}
              style={{
                width: 21,
                height: 21,
                resizeMode: 'cover',
                // marginRight: 20,
              }}
            />
          </View>
        </View>
        <View style={{margin: 5}}>
          <Text style={{color: 'black'}}>2,356 likes</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: '500'}}>
              Shubham_Singh
            </Text>
            <Text style={{color: 'black', fontWeight: '400', marginLeft: 5}}>
              This is my first post
            </Text>
          </View>
          <Pressable>
            <Text>View all 3 comments</Text>
          </Pressable>
        </View>
      </View>
      {/* action Modal popup */}
      <Modal visible={showActionPopUp} transparent={true} animationType="slide">
        <Pressable onPress={()=>setShowActionPopUp(false)} style={{flexDirection: 'row', alignItems: 'flex-end', flex: 1}}>
          <Pressable
          onPress={()=>setShowActionPopUp(true)}
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                Save
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                Share
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                Follow
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                About this account
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                Report
              </Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default PostGola;

const styles = StyleSheet.create({});
