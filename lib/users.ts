import axios from 'axios';

type userType = {
  id: string;
  name: string;
};

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
        id: user.id,
      },
    };
  });
}

export async function getUserData() {
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
      id: user.id,
      name: user.name,
    };
  });
}
