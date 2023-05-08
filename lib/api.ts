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
