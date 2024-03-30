import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyToastComponent = ({messageType, message}) => {
  return (
    <View style={styles.main}>
      <View style={[styles.box, {borderColor:messageType}]}>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

export default MyToastComponent;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 100,
    width: '100%',
  },
  box: {
    backgroundColor: 'white',
    borderWidth: 2,
    
    flexDirection: 'row',
    justifyContent: 'center',
    margin:20,
    padding:6,
    elevation:10,
    borderRadius:5
  },
});
