import {ScrollView, StyleSheet, Image, Text, View, ActivityIndicator, Modal} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StoryGola from '../componentss/StoryGola';
import PostGola from '../componentss/PostGola';
import PeopleSuggestion from '../componentss/PeopleSuggestion';
import Footer from '../componentss/Footer';
import {useFocusEffect} from '@react-navigation/native';
import {getMyFeed} from '../services/user.services';
import {useGlobalState} from '../GlobalProvider';
const Feed = () => {
  const [postDataArr, setPostDataArr] = useState([]);
  const [showLoader, setShowLoader]=useState(false)
  const {globalState, setGlobalState} = useGlobalState();
  const handleGetMyPost = async () => {
    setShowLoader(true)
    try {
      let response = await getMyFeed(globalState?.userData?._id);
      setPostDataArr(response?.data?.data?.data);
      setShowLoader(false)
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      handleGetMyPost();
    }, []),
  );
  let randomNumber = Math.round(Math.random()*20);
  return (
    <>
      <View style={styles.main}>
        <LinearGradient
          colors={['#fff', '#f4f8fc', '#eef4fe', '#b5d5fc']}
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
            <View>
              <Image
                source={require('../images/redHeart.png')}
                style={{height: 22, width: 22, resizeMode: 'contain'}}
              />
              <View
                style={{
                  position: 'absolute',
                  left: 13,
                  top: 12,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 13,
                  width: 13,
                  borderRadius: 7,
                }}>
                <Text style={{color: 'black', fontSize: 10}}>3</Text>
              </View>
            </View>
          </View>

          <ScrollView>
            <View>
              <ScrollView horizontal={true}>
                <StoryGola />
                <StoryGola />
                <StoryGola />
                <StoryGola />
                <StoryGola />
                <StoryGola />
                <StoryGola />
                <StoryGola />
              </ScrollView>
            </View>
            {postDataArr?.slice(0, randomNumber).map((v, i) => {
              return <PostGola postValue={v} />;
            })}
            <PeopleSuggestion />
            {postDataArr?.slice(randomNumber).map((v, i) => {
              return <PostGola postValue={v} />;
            })}
          </ScrollView>
        </LinearGradient>
      </View>
      <Footer />
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
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
