import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Step 1: Create a context
const GlobalStateContext = createContext();

// Step 2: Create a provider component
export const GlobalStateProvider = ({children}) => {
  const setUserData = async () => {
    try {
      let localUser = await AsyncStorage.getItem('userData');
      let token = await AsyncStorage.getItem('token')
      setGlobalState({...globalState, userData: JSON.parse(localUser)});
      setGlobalState({...globalState, savedPost: JSON.parse(localUser).SavedPost});
      setGlobalState({...globalState, token: JSON.parse(token)});
    } catch (error) {
      console.warn('error from global provider');
    }
  };

  const [globalState, setGlobalState] = useState({
    userData: null,
    token:null,
    SavedPost:[]
  });
  
  useEffect(() => {
    setUserData();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        globalState,
        setGlobalState,
      }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Step 3: Create a custom hook to access the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};