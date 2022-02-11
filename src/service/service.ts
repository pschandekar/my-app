import axios from "axios";

export const getUserData: any = () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response
  })
}