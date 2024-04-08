import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import UserSuggestionGola from './UserSuggestionGola';
import {getSuggestedUser} from '../services/user.services';
import {useFocusEffect} from '@react-navigation/native';
import {useGlobalState} from '../GlobalProvider';
const PeopleSuggestion = () => {
  const {globalState, setGlobalState} = useGlobalState();
  const [showLoader, setShowLoader] = useState(false);
  const [userArr, setUserArr] = useState([]);
  const getSuggestedUserHandle = async () => {
    setShowLoader(true);
    try {
      let response = await getSuggestedUser(globalState.userData._id);
      if (response.data.status.code) {
        setUserArr(response.data.data.userData);
        setShowLoader(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getSuggestedUserHandle();
    }, []),
  );
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
          People you may know
        </Text>
      </View>
      <ScrollView horizontal={true}>
        {showLoader && (
          <View
            style={{
              height: 150,
              width: 120,
              marginTop: 20,
              marginRight: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="small" color="gray" />
          </View>
        )}
        {userArr
          ?.filter((v, i) => {
            return v?._id != globalState?.userData?._id;
          })
          .map((v, i) => {
            return <UserSuggestionGola value={v} />;
          })}
      </ScrollView>
    </View>
  );
};

export default PeopleSuggestion;

const styles = StyleSheet.create({
  main: {
    padding: 16,
  },
});
