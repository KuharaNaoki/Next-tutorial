import axios from 'axios';

export default async function handler(req, res) {
  //   res.status(200).json({ text: 'Hello' });
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer P6qG3ozj',
    },
  };
  let response: any;

  try {
    response = await axios.get(
      'https://r7lq7crpw8.execute-api.ap-northeast-1.amazonaws.com/knowledgeforest/search/0/2',
      config
    );
    console.log('response.data', response.data);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ ...response.data });

  //   const response = await fetch('https://jsonplaceholder.typicode.com/users/');
  //   const users = await response.json();
  //   console.log(users);
  //   res.status(200).json({ users });
}
