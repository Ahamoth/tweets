import axios from 'axios';

const BASE_URL = 'https://6448087350c2533744369c3f.mockapi.io/api/v1/users';

export async function fetchTweets(page = 1) {
  const response = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return response.data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`${BASE_URL}/${id}`, followers);
  return response.data;
}