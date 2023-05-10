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
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    const response = await axios.get(
      'https://ahtwt332h2.execute-api.ap-northeast-1.amazonaws.com/kuhara-study-backend',
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAwsKuharaStudyBackend = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const response = await axios.post(
      'https://ahtwt332h2.execute-api.ap-northeast-1.amazonaws.com/kuhara-study-backend',
      {
        name: 'Kuhara Naoki',
      },
      { headers: headers }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
