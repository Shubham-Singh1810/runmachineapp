import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useGlobalState} from '../GlobalProvider';
const UserSuggestionGola = ({value}) => {
  const {globalState, setGlobalState} = useGlobalState();
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Profile', {userId: value?._id})}
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 20,
      }}>
      {value?.ProfilePic ? (
        <Image
          source={{
            uri: value?.ProfilePic,
          }}
          style={{
            width: 120,
            borderRadius: 5,
            height: 150,
            resizeMode: 'cover',
          }}
        />
      ) : (
        <Image
          source={require('../images/dummyUser.png')}
          style={{
            width: 120,
            borderRadius: 5,
            height: 150,
            resizeMode: 'cover',
          }}
        />
      )}

      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            marginTop: 3,
            fontWeight: '500',
          }}>
          {value?.FullName && value?.FullName?.length > 12
            ? value?.FullName.substring(0, 12) + '...'
            : value?.FullName}
        </Text>
        <View
          style={{
            backgroundColor: '#becce5',
            flexDirection: 'row',
            marginTop: 4,
            justifyContent: 'center',
            paddingVertical: 2,
          }}>
          <Text style={{color: 'black', fontWeight: '500'}}>
            {globalState?.userData?.Followings?.includes(value?._id)
              ? 'Following'
              : 'Follow'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default UserSuggestionGola;

const styles = StyleSheet.create({});
