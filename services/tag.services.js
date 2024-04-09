import axios from 'axios';

// Define your API base URL
const BASE_URL = 'http://192.168.32.192:3005/api/';
// const BASE_URL = 'https://runmachineserver.onrender.com/api/';

// Function for login
export const createTag = async formData => {
  try {
    const response = await axios.post(BASE_URL + 'post/createTag', formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function for signup
export const getTagList = async () => {
  try {
    const response = await axios.get(BASE_URL + 'tag/getTag');
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};


