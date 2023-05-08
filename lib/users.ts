import { getUserDataAsync } from './api';
import { UserArrayType } from '../types/userType';

export const getUserIds = async () => {
  const getUserData: UserArrayType = await getUserDataAsync();

  return getUserData.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
};

export const getAllUserData = async () => {
  const getUserData: UserArrayType = await getUserDataAsync();

  return getUserData.map((user) => {
    return {
      id: user.id.toString(),
      name: user.name.toString(),
    };
  });
};

export const getUserData = async (id: string) => {
  const getUserData: UserArrayType = await getUserDataAsync();

  return getUserData
    .filter((user) => user.id.toString() === id)
    .map((user) => {
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
};
