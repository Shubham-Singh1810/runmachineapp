import axios from 'axios';

// Define your API base URL
// const BASE_URL = 'http://192.168.1.5:3005/api/';
const BASE_URL = 'http://192.168.32.192:3005/api/';

// Function for login
export const login = async formData => {
  try {
    const response = await axios.post(BASE_URL + 'user/login', formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function for signup
export const signup = async formData => {
  try {
    const response = await axios.post(BASE_URL + 'user/register', formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function for otpverification
export const verifyOtp = async formData => {
    try {
      const response = await axios.post(BASE_URL + 'user/verifyOtp', formData);
      return response;
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error('Error fetching data:', error);
      throw error;
    }
  };
// Function for resend otp
export const resendOtp = async formData => {
  try {
    const response = await axios.post(BASE_URL + 'user/resend_email_otp', formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function for profile update
export const editProfile = async formData => {
  try {
    const response = await axios.put(BASE_URL + 'user/updateUser', formData, {
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
 
// Function for profile update
export const getUserDetails = async id => {
  try {
    const response = await axios.get(BASE_URL + 'user/getUser/'+id);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function for getting feed 
export const getMyFeed = async id => {
  try {
    const response = await axios.post(BASE_URL + 'post/myfeed', {
      userId:id
    });
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const getSuggestedUser = async id => {
  try {
    const response = await axios.get(BASE_URL + 'user/suggested/account/'+id);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const save_unsave_post = async (postId, currentUser) => {
  try {
    const response = await axios.post(BASE_URL + 'post/save/'+postId, {currentUser});
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const like_unlike_post = async (postId, currentUser) => {
  try {
    const response = await axios.post(BASE_URL + 'post/likes/'+postId, {currentUser});
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const followRequest = async (formData) => {
  console.log(formData)
  try {
    const response = await axios.post(BASE_URL + 'user/follow', formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};
