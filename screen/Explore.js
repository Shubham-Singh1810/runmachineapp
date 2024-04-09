import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PeopleSuggestion from '../componentss/PeopleSuggestion';
import PostGola from '../componentss/PostGola';
import TraindingPost from '../componentss/TraindingPost';
import PostByTag from '../componentss/PostByTag';
import PostByPlace from '../componentss/PostByPlace';
import Footer from '../componentss/Footer';
import {searchUser} from '../services/user.services';
import {useGlobalState} from '../GlobalProvider';
import {useNavigation} from '@react-navigation/native';
const Explore = () => {
  const {globalState, setGlobalState} = useGlobalState();
  const navigation = useNavigation();
  const [searchKey, setSearchKey] = useState('');
  const [userList, setUserList] = useState([]);
  const getSearchResult = async key => {
    setSearchKey(key);
    try {
      let response = await searchUser(key);
      setUserList(response?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.main}>
        <LinearGradient
          colors={['#fff', '#f4f8fc', '#eef4fe', '#b5d5fc']}
          style={styles.main}>
          <View
            style={{borderWidth: 1, borderRadius: 8, margin: 8, marginTop: 15}}>
            <TextInput
              placeholder="Search people..."
              style={{paddingHorizontal: 10, paddingVertical: 2}}
              onChangeText={text => {
                getSearchResult(text);
              }}
            />
          </View>
          {searchKey ? (
            <View>
              <View style={{flexDirection: 'row', margin: 15}}>
                <Text style={{color: 'black'}}>Result Matched : </Text>
                <Text style={{color: 'black', fontWeight: '500'}}>10</Text>
              </View>
              {userList?.map((v, i) => {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Profile', {userId: v?._id})
                    }>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 12,
                        paddingHorizontal: 0,
                        borderBottomWidth: 1,
                        marginHorizontal: 12,
                        borderColor: 'gray',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        {v?.ProfilePic ? (
                          <Image
                            source={{
                              uri: v?.ProfilePic,
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
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 14,
                              fontWeight: '500',
                            }}>
                            {v?.FullName}
                          </Text>
                          <Text style={{color: 'gray', fontSize: 12}}>
                            {v?.Followers?.length} Followers
                          </Text>
                        </View>
                      </View>
                      <Pressable>
                        {v?._id == globalState?.userData?._id ? (
                          <Text style={{color: '#002852', fontWeight: '500'}}>
                            View
                          </Text>
                        ) : (
                          <Text style={{color: '#002852', fontWeight: '500'}}>
                            {v?.Followers?.includes(globalState?.userData?._id)
                              ? 'Following'
                              : 'Follow'}
                          </Text>
                        )}
                      </Pressable>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          ) : (
            <ScrollView>
              <PeopleSuggestion />
              <PostByPlace />
              <TraindingPost />
              <PostByTag />
            </ScrollView>
          )}
        </LinearGradient>
      </View>
      <Footer />
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
