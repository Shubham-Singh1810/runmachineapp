import axios from 'axios';

// Define your API base URL
const BASE_URL = 'http://192.168.32.192:3005/api/';
// const BASE_URL = 'https://runmachineserver.onrender.com/api/';

// Function for creating post
export const createPost = async formData => {
  try {
    const response = await axios.post(BASE_URL + 'post/create', formData, {
        headers: {
            'Content-Type': `multipart/form-data`,
            // Authorization: `Bearer ${access_token}`
          }
    });
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
    const response = await axios.get(BASE_URL + 'post/getTag');
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function for getting post by id
export const getPostById = async id => {
  try {
    const response = await axios.get(BASE_URL + 'post/'+id, {
        headers: {
            'Content-Type': `multipart/form-data`,
            // Authorization: `Bearer ${access_token}`
          }
    });
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getPostByFilter = async query => {
  console.log(query)
  try {
    const response = await axios.post(BASE_URL + 'post/getPostByFilter', query);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};