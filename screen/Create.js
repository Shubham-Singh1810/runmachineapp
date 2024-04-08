import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Modal
  // Picker
} from 'react-native';
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getTagList} from '../services/tag.services';
import {getPlaceList} from '../services/place.services';
import MySingleSelectPopUp from '../componentss/MySingleSelectPopUp';
// import {Picker} from '@react-native-picker/picker';
import ToastManager, {Toast} from 'toastify-react-native';
import {useNavigation} from '@react-navigation/native';
import {useGlobalState} from '../GlobalProvider';

import {useRoute} from '@react-navigation/native';
import {createPost} from "../services/post.services"
const Create = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {res} = route.params;
  const [tagList, setTagList] = useState([]);
  const [showLoader, setShowLoader]=useState(false)
  const [showTagPopUp, setShowTagPopUp] = useState(false);
  const handleGetTagList = async () => {
    try {
      let response = await getTagList();
      if (response?.data?.data?.message == 'Tag list retrieved successfully!') {
        let tagArr = response?.data?.data.data?.map(item => ({
          label: item.Tag,
          value: item._id,
        }));
        setTagList(tagArr);
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  };
  const {globalState, setGlobalState} = useGlobalState();
  const [placeList, setPlaceList] = useState([]);
  const [showPlacePopUp, setShowPlacePopUp] = useState(false);
  const handleGetLocationList = async () => {
    try {
      let response = await getPlaceList();
      if (
        response?.data?.data?.message == 'Location list retrieved successfully!'
      ) {
        let placeArr = response?.data?.data.data?.map(item => ({
          label: item.Location,
          value: item._id,
        }));
        setPlaceList(placeArr);
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      handleGetTagList();
      handleGetLocationList();
    }, []),
  );
  const [postForm, setPostForm] = useState({
    Caption: '',
    Author: globalState.userData._id,
    LocationId: '',
    TagId: '',
  });
  const[tagLabel, setTagLabel]=useState("")
  const[placeLabel, setPlaceLabel]=useState("")
  const handlePostSubmit = async () => {
    setShowLoader(true)
    try {
      const newFormData = new FormData();
      newFormData.append('Author', globalState?.userData?._id);
      newFormData.append('Caption', postForm.Caption);
      newFormData.append('LocationId', postForm.LocationId);
      newFormData.append('TagId', postForm.TagId);
      newFormData.append('ImgUrl', {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name,
      });
      let response = await createPost(newFormData);
      if(response.data.status.code==200){
        setShowLoader(false)
        Toast.success('Post created successfully');
        setTimeout(()=>{
          navigation.navigate('Feed');
        }, 2000)
      }
    } catch (error) {
      setShowLoader(false)
      Toast.error('Something went wrong');
    }
  };
  
  return (
    <View style={styles.main}>
      <ScrollView style={styles.main}>
        <View>
          <Image
            source={{
              uri: res[0].uri,
            }}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{marginTop: 5, padding: 5}}>
          <TextInput
            placeholder="Add caption"
            multiline={true}
            numberOfLines={3}
            style={styles.inputBox}
            textAlignVertical="top"
            onChangeText={text => setPostForm({...postForm, Caption: text})}
          />
          <View>
            <Pressable
              onPress={() => setShowTagPopUp(true)}
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
              <Text style={{color: '#11134e', fontWeight: '600'}}>{tagLabel}</Text>
            </Pressable>

            <View>
              <MySingleSelectPopUp
                title="Select Tag"
                toggle={showTagPopUp}
                showSearch={true}
                setToggle={setShowTagPopUp}
                inputOption={tagList}
                callBackFunck={(value, label) => {
                  setPostForm({...postForm, TagId: value});
                  setTagLabel(label)
                }}
              />
            </View>
          </View>

          <View>
            <Pressable
              onPress={() => setShowPlacePopUp(true)}
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
              <Text style={{color: '#11134e', fontWeight: '600'}}>{placeLabel}</Text>
            </Pressable>
            <View>
              <MySingleSelectPopUp
                title="Select Location"
                toggle={showPlacePopUp}
                showSearch={true}
                setToggle={setShowPlacePopUp}
                inputOption={placeList}
                callBackFunck={(value, label) => {
                  setPostForm({...postForm, LocationId: value});
                  setPlaceLabel(label)
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{margin: 10}}>
        <Button title="Post" color="#11134e" onPress={handlePostSubmit} />
      </View>
      <ToastManager />
      <Modal transparent={true} visible={showLoader} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      </Modal>
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
