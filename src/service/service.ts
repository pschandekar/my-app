import axios from "axios";
import { IUserList } from "../interface/IUserList";

// get the userlist data
export const getUserData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response)
    .catch(err => {
      throw err;
    });
}

// filter the useList as per user input value
export const filterUserList = (userList: Array<IUserList>, searchValue: string) => {
  // exclude column list from filter
  const excludeColumns = ["id"];
  let updatedUserList = userList;

  updatedUserList = updatedUserList.filter((item: any) => {
    return Object.keys(item).some(key =>
      excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(searchValue)
    );
  });

  return updatedUserList
};
