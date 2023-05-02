import { getUserDataAsync } from './api';
import { UserArrayType } from '../types/user';

export async function getUserIds() {
  const getUserData: UserArrayType = await getUserDataAsync();

  return getUserData.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
}

export async function getAllUserData() {
  const getUserData: UserArrayType = await getUserDataAsync();

  return getUserData.map((user) => {
    return {
      id: user.id.toString(),
      name: user.name.toString(),
    };
  });
}

export async function getUserData(id: string) {
  const getUserData: UserArrayType = await getUserDataAsync();

  return getUserData
    .filter((user) => user.id == id)
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
}
