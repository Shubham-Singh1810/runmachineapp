import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

const CommentsGola = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  return (
    <View style={{padding: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '70%',
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
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: '500'}}>
              shubham16
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                marginVertical: 3,
                fontWeight: '400',
              }}>
              All the best jsdhf sidufhsd fisduhgdfg All the best jsdhf sidufhsd
              fisduhgdfg{' '}
            </Text>
            <Pressable onPress={() => setShowReplyBox(!showReplyBox)}>
              <Text style={{fontSize: 11, fontWeight: '500', color: 'gray'}}>
                {showReplyBox ? 'Hide Reply' : 'View Reply'}
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
              }}
              style={{
                width: 16,
                height: 16,
                resizeMode: 'cover',
              }}
            />
            <Text style={{fontSize: 9, fontWeight: '500'}}>165</Text>
          </View>
        </View>
      </View>
      {showReplyBox && (
        <View style={{marginTop: 15}}>
          <View style={{marginLeft: 25, marginBottom: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '70%',
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
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text
                    style={{color: 'black', fontSize: 11, fontWeight: '500'}}>
                    shubham16
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginVertical: 3,
                      fontWeight: '400',
                    }}>
                    All the best jsdhf sidufhsd fisduhgdfg All the best jsdhf
                    sidufhsd fisduhgdfg{' '}
                  </Text>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                    }}
                    style={{
                      width: 16,
                      height: 16,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text style={{fontSize: 9, fontWeight: '500'}}>165</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginLeft: 25, marginBottom: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '70%',
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
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text
                    style={{color: 'black', fontSize: 11, fontWeight: '500'}}>
                    shubham16
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginVertical: 3,
                      fontWeight: '400',
                    }}>
                    All the best jsdhf sidufhsd fisduhgdfg All the best jsdhf
                    sidufhsd fisduhgdfg{' '}
                  </Text>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                    }}
                    style={{
                      width: 16,
                      height: 16,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text style={{fontSize: 9, fontWeight: '500'}}>165</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginLeft: 25, marginBottom: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '70%',
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
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text
                    style={{color: 'black', fontSize: 11, fontWeight: '500'}}>
                    shubham16
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginVertical: 3,
                      fontWeight: '400',
                    }}>
                    All the best jsdhf sidufhsd fisduhgdfg All the best jsdhf
                    sidufhsd fisduhgdfg{' '}
                  </Text>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                    }}
                    style={{
                      width: 16,
                      height: 16,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text style={{fontSize: 9, fontWeight: '500'}}>165</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable
              onPress={() => setShowReplyInput(true)}
              style={{
                marginLeft: 25,
                marginBottom: 15,
                backgroundColor: '#002852',
                borderRadius: 3,
                paddingHorizontal: 5,
                paddingVertical: 2,
              }}>
              <Text style={{color: 'white'}}>Add Reply</Text>
            </Pressable>
          </View>
        </View>
      )}
      <Modal visible={showReplyInput} transparent={true} animationType="slide">
        <Pressable
          onPress={() => setShowReplyInput(false)}
          style={{flexDirection: 'row', alignItems: 'flex-end', flex: 1, backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
          <Pressable
            onPress={() => setShowReplyInput(true)}
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
            <View>
              <Text style={{color:"black", marginBottom:10}}>You are replying to</Text>
              <View style={{marginBottom: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '70%',
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
                        marginRight: 10,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 11,
                          fontWeight: '500',
                        }}>
                        shubham16
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 12,
                          marginVertical: 3,
                          fontWeight: '400',
                        }}>
                        All the best jsdhf sidufhsd fisduhgdfg All the best
                        jsdhf sidufhsd fisduhgdfg{' '}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Image
                        source={{
                          uri: 'https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png',
                        }}
                        style={{
                          width: 16,
                          height: 16,
                          resizeMode: 'cover',
                        }}
                      />
                      <Text style={{fontSize: 9, fontWeight: '500'}}>165</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
          style={{
            borderWidth: 1,
            borderColor:"gray",
            borderRadius: 3,
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Reply..."
            multiline={true} // Allow multiple lines
            numberOfLines={2}
            style={{paddingHorizontal: 5, paddingVertical: 4, width: '85%', backgroundColor:"white"}}
          />
          <Pressable
            style={{
              backgroundColor: '#002852',
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Send</Text>
          </Pressable>
        </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default CommentsGola;

const styles = StyleSheet.create({});
