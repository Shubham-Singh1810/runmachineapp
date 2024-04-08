import axios from 'axios';

// Define your API base URL
// const BASE_URL = 'http://192.168.1.5:3005/api/';
const BASE_URL = 'http://192.168.32.192:3005/api/';


// Function for login
export const createPlace = async formData => {
  try {
    const response = await axios.post(BASE_URL + 'post/createLocation', formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function for signup
export const getPlaceList = async () => {
  try {
    const response = await axios.get(BASE_URL + 'post/getLocation');
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

