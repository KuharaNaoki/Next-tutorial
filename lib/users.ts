import axios from 'axios';
import { userType } from '../types/user';

export async function getUserIds() {
  const getUserData = await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return getUserData.map((user: userType) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
}

export async function getAllUserData() {
  const getUserData = await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return getUserData.map((user: userType) => {
    return {
      id: user.id.toString(),
      name: user.name.toString(),
    };
  });
}

export async function getUserData(id: string) {
  const getUserData = await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return getUserData
    .filter((user: userType) => user.id == id)
    .map((user: userType) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: {
          name: user.company.name,
        },
      };
    });
}
