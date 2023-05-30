import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function signUp(body) {
  const response = await axios.post('/users/signup', body);
  return response;
}

export async function login(body) {
  const response = await axios.post('/users/login', body);
  return response;
}

export async function logout(body) {
  const response = await axios.post('/users/logout', body);
  return response;
}

export async function currentUser(token) {
  const response = await axios.get('/users/current', token);
  return response;
}
