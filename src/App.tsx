import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser, searchUser } from "./actions/userAction";

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
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>User Name</th>
            <th>Web Site</th>
          </tr>
        </thead>
        <tbody>
          {
            userList && userList.length > 0 && userList.map((userData: IUserList) => {
              return (
                <tr>
                  <td>{userData.name}</td>
                  <td>{userData.username}</td>
                  <td>{userData.phone}</td>
                  <td>{userData.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
