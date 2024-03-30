import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

const Create = () => {
  const placeArr = [
    'kolkata',
    'patna',
    'nagpur',
    'delhi',
    'india',
    'bihar',
    'mumbai',
  ];
  const tagArr = [
    'food',
    'gym',
    'travel',
    'news',
    'code',
    'fassion',
    'politics',
  ];
  return (
    <View style={styles.main}>
      <ScrollView style={styles.main}>
        <View>
          <Image
            source={{
              uri: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
            }}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{marginTop: 5, padding:5}}>
          <TextInput
            placeholder="Add caption"
            multiline={true}
            numberOfLines={3}
            style={styles.inputBox}
            textAlignVertical="top"
          />
          <View>
            <View
              style={{
                marginVertical: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Image
                  source={require('../images/tag.png')}
                  style={{height: 15, width: 15, marginRight: 5}}
                />
              </View>
              <Text style={{color: 'black'}}>Select Tag : </Text>
              <Text style={{color: '#11134e', fontWeight: '600'}}>#food</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap', // Wrap items to the next line when needed
                maxWidth: '100%',
              }}>
              {tagArr?.map((v, i) => {
                return (
                  <Text
                    style={{
                      backgroundColor: '#becce5',
                      color: 'black',
                      paddingHorizontal: 7,
                      marginHorizontal: 7,
                      marginVertical: 5,
                      borderRadius: 3,
                      fontWeight: '500',
                    }}>
                    #{v}
                  </Text>
                );
              })}
            </View>
          </View>
          <View>
            <View
              style={{
                marginVertical: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Image
                  source={require('../images/location.png')}
                  style={{height: 15, width: 15, marginRight: 5}}
                />
              </View>
              <Text style={{color: 'black'}}>Select Location : </Text>
              <Text style={{color: '#11134e', fontWeight: '600'}}>Kolkata</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap', // Wrap items to the next line when needed
                maxWidth: '100%',
              }}>
              {placeArr?.map((v, i) => {
                return (
                  <Text
                    style={{
                      backgroundColor: '#becce5',
                      color: 'black',
                      paddingHorizontal: 7,
                      marginHorizontal: 7,
                      marginVertical: 5,
                      borderRadius: 3,
                      fontWeight: '500',
                    }}>
                    #{v}
                  </Text>
                );
              })}
            </View>
          </View>
          
        </View>
      </ScrollView>
      <View style={{margin:10}}>
      <Button title="Post" color="#11134e" />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginBottom: 4,
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#2c2c2c',
    borderRadius: 5,
  },
});
