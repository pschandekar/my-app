import axios from "axios";

export const getUserData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response)
    .catch(err => {
      throw err;
    });
}