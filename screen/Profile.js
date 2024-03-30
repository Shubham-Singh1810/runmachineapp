import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../componentss/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useGlobalState} from '../GlobalProvider';
import {getUserDetails} from '../services/user.services';
import { useFocusEffect } from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  const {globalState, setGlobalState} = useGlobalState();
  const [showSettingPop, setShowSettingPop] = useState(false);
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      setGlobalState({
        ...globalState,
        userData: '',
        token: '',
      });
    } catch (error) {}
  };
  const [userDetails, setUserDetails] = useState('');
  const fetchUser = async () => {
    console.log('sdfkb');
    try {
      let response = await getUserDetails(globalState.userData._id);
      if (response?.data?.data?.message == 'User details retrieved successfully!') {
        setUserDetails(response?.data?.data.data);
        console.log(response?.data?.data.data)
      }
    } catch (error) {
      console.log("Something went wrong")
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchUser();
    }, [])
  );
  return (
    <>
      <LinearGradient
        colors={['#b5d5fc', '#eef4fe', '#f4f8fc', '#fff']}
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
          <Pressable onPress={() => setShowSettingPop(true)}>
            <Image
              source={require('../images/menu.png')}
              style={{
                height: 20,
                width: 25,
                resizeMode: 'contain',
              }}
            />
          </Pressable>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <View>
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 40,
                  borderColor: 'gray',
                  elevation: 1,
                }}>
                  {userDetails?.ProfilePic ? <Image
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                  }}
                  source={{
                    uri: userDetails?.ProfilePic,
                  }}
                />:<Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                }}
                source={require("../images/dummyUser.png")}
              />}   
              </View>
              {/* <Text style={{textAlign:"center", color:"black", fontSize:13, marginTop:3, fontWeight:"500"}}>Shubham</Text> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '60%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: -3,
                    fontSize: 18,
                  }}>
                  {userDetails?.MyPost?.length}
                </Text>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 13}}>
                  posts
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: -3,
                    fontSize: 18,
                  }}>
                {userDetails?.Followers?.length}
                </Text>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 13}}>
                  followers
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: -3,
                    fontSize: 18,
                  }}>
                  {userDetails?.Followings?.length}
                </Text>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 13}}>
                  following
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                marginTop: -5,
                marginBottom: 5,
              }}>
              {userDetails.FullName}
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontFamily:"cursive",
                marginTop: -7,
                marginBottom: 5,
              }}>
              Popularly known as {userDetails.UserName}
            </Text>
            <Text style={{color: 'black', fontSize: 12.5}}>
             {userDetails.Bio}
            </Text>
            <Text style={{color: 'navy', fontWeight: '500', fontSize: 12.5}}>
              {userDetails.Website}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              marginVertical: 10,
              justifyContent: 'space-between',
            }}>
            <Pressable
              onPress={() => navigation.navigate('Edit Profile', {userDetails:userDetails})}
              style={{
                backgroundColor: 'whitesmoke',
                elevation: 1,
                width: '45%',
                paddingVertical: 6,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Edit profile
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: 'whitesmoke',
                elevation: 1,
                width: '45%',
                paddingVertical: 6,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Share Profile
              </Text>
            </Pressable>
          </View>
          <Text style={{marginLeft: 15, fontWeight: '600'}}>
            Story Highlights
          </Text>
          <ScrollView horizontal={true} style={{margin: 10}}>
            <View
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                borderRadius: 25,
                borderColor: 'gray',
                marginRight: 18,
              }}>
              <Image
                style={{height: 60, width: 60, borderRadius: 25}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                borderRadius: 25,
                borderColor: 'gray',
                marginRight: 18,
              }}>
              <Image
                style={{height: 60, width: 60, borderRadius: 25}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                borderRadius: 25,
                borderColor: 'gray',
                marginRight: 18,
              }}>
              <Image
                style={{height: 60, width: 60, borderRadius: 25}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                borderRadius: 25,
                borderColor: 'gray',
                marginRight: 18,
              }}>
              <Image
                style={{height: 60, width: 60, borderRadius: 25}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                borderRadius: 25,
                borderColor: 'gray',
                marginRight: 18,
              }}>
              <Image
                style={{height: 60, width: 60, borderRadius: 25}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                borderRadius: 25,
                borderColor: 'gray',
                marginRight: 18,
              }}>
              <Image
                style={{height: 60, width: 60, borderRadius: 25}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              justifyContent: 'space-around',
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <Pressable
              style={
                true && {
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 2,
                  borderColor: 'gray',
                }
              }>
              <Image
                source={require('../images/squareMenu.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </Pressable>
            <Pressable
              style={
                false && {
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 2,
                  borderColor: 'gray',
                }
              }>
              <Image
                source={require('../images/list.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </Pressable>
            <Pressable
              style={
                false && {
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 2,
                  borderColor: 'gray',
                }
              }>
              <Image
                source={require('../images/saveIcon.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginTop: 2,
                  resizeMode: 'contain',
                }}
              />
            </Pressable>
          </View>
          <ScrollView style={{marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
              <Image
                style={{height: 120, width: '33%', backgroundColor: 'red'}}
                source={{
                  uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
                }}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </LinearGradient>
      <Footer />
      <Modal visible={showSettingPop} transparent={true} animationType="slide">
        <Pressable
          onPress={() => setShowSettingPop(false)}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}>
          <Pressable
            onPress={() => setShowSettingPop(true)}
            style={{
              width: '70%',
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomWidth: 1,
                alignItems: 'center',
                paddingVertical: 13,
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                Shubham Singh
              </Text>
              <Pressable onPress={() => setShowSettingPop(false)}>
                <Image
                  source={require('../images/close.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </Pressable>
            </View>

            <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/saveIcon.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Saved
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/archive.png')}
                  style={{
                    width: 20,
                    height: 25,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Archive
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/heart.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Notifications
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/followers.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Followers
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/following.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Following
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/blocked.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Booked
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/secure-shield.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 8,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Secuarity
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/beggar.png')}
                  style={{
                    width: 20,
                    height: 24,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Need Help
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/faq.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Faq
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 19,
                }}>
                <Image
                  source={require('../images/share.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                  Share
                </Text>
              </View>
            </View>
            <Pressable
              onPress={() => handleLogout()}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
                position: 'absolute',
                bottom: 0,
                padding: 10,
                borderTopWidth: 1,
                borderColor: 'gray',
                borderStyle: 'dotted',
                width: '100%',
              }}>
              <Image
                source={require('../images/power-off.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
                Logout
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'red',
  },
});
