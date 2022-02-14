import axios from "axios";

// get the userlist data
export const getUserData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response)
    .catch(err => {
      throw err;
    });
}