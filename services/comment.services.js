import axios from 'axios';

// Define your API base URL
const BASE_URL = 'http://192.168.32.192:3005/api/';
// const BASE_URL = 'https://runmachineserver.onrender.com/api/';


// Function for login
export const createComment = async (postId, formData) => {
  try {
    const response = await axios.post(BASE_URL + 'comment/create/'+postId, formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const likeComment = async (commentId, currentUser) => {
  try {
    const response = await axios.post(BASE_URL + 'comment/likes/'+commentId, {currentUser});
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};
// Function for comment list
export const getCommentList = async (postId) => {
  try {
    const response = await axios.get(BASE_URL + 'comment/list/'+postId);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};


