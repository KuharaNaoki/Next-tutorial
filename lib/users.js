import axios from 'axios';

// export async function getUserIds() {
//   const getUserData = await axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return getUserData.map((user) => {
//     return {
//       params: {
//         id: user.id,
//       },
//     };
//   });
// }

// export async function getUserData(id) {
//   const getUserData = await axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return getUserData.map((user) => {
//     return {
//       id,
//       name: user.name,
//     };
//   });
// }
