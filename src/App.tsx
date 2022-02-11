import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser, searchUser } from "./actions/userAction";
import UserList from "./components/UserList";

export interface IUserList {
  name: string,
  username: string,
  phone: string,
  email: string
}

function App() {
  const userList = useSelector((state: any) => state.userReducer?.userList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [])


  // search user from the list on any column
  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      dispatch(searchUser(userList, event.target.value.toLowerCase()))
    } else {
      dispatch(getUser());
    }
  }

  return (
    <div className="App">
      <div className="input-group rounded">
        <input type="search" width={'50px'} className="form-control rounded" onChange={handleOnChangeSearch} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      {
        userList && userList.length > 0 &&
        <UserList
          userList={userList}
        />
      }
    </div>
  );
}

export default App;
