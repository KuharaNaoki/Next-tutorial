import axios from 'axios';

export const getUserDataAsync = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAwsKuharaStudyBackend = async () => {
  try {
    const response = await axios.get(
      'https://ahtwt332h2.execute-api.ap-northeast-1.amazonaws.com/kuhara-study-backend'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
