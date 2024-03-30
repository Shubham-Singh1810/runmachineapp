import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PeopleSuggestion from '../componentss/PeopleSuggestion';
import PostGola from '../componentss/PostGola';
import TraindingPost from '../componentss/TraindingPost';
import PostByTag from '../componentss/PostByTag';
import PostByPlace from '../componentss/PostByPlace';
const Search = () => {
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#fff', '#f4f8fc', '#eef4fe', '#b5d5fc']}
        style={styles.main}>
        <View
          style={{borderWidth: 1, borderRadius: 8, margin: 8, marginTop: 15}}>
          <TextInput
            placeholder="Search people..."
            style={{paddingHorizontal: 10, paddingVertical: 2}}
          />
        </View>
        {true ?
         <View>
            <View>
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
              <Text style={{color: '#002852', fontWeight: '500'}}>Follow</Text>
            </Pressable>
          </View>
        </View>
        <View>
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
              <Text style={{color: '#002852', fontWeight: '500'}}>Follow</Text>
            </Pressable>
          </View>
        </View>
        <View>
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
              <Text style={{color: '#002852', fontWeight: '500'}}>Follow</Text>
            </Pressable>
          </View>
        </View>
        <View>
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
              <Text style={{color: '#002852', fontWeight: '500'}}>Follow</Text>
            </Pressable>
          </View>
        </View>
        <View>
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
              <Text style={{color: '#002852', fontWeight: '500'}}>Follow</Text>
            </Pressable>
          </View>
        </View>
            </View>:

        <ScrollView>
          <PeopleSuggestion />
          <PostByPlace />
          <TraindingPost />
          <PostByTag />
        </ScrollView>}
      </LinearGradient>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
