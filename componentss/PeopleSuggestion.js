import {ScrollView, StyleSheet,Image, Text, View} from 'react-native';
import React from 'react';
import UserSuggestionGola from './UserSuggestionGola';

const PeopleSuggestion = () => {
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color:"black", fontSize:16, fontWeight:"500"}}>People you may know</Text>
      </View>
      <ScrollView horizontal={true}>
      <UserSuggestionGola/>
      <UserSuggestionGola/>
      <UserSuggestionGola/>
      <UserSuggestionGola/>
      </ScrollView>
    </View>
  );
};

export default PeopleSuggestion;

const styles = StyleSheet.create({
    main:{
        padding:16
    }
});
