import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserList, searchUser } from "./actions/userAction";
import UserList from "./components/UserList";



function App() {
  const userList = useSelector((state: any) => state.userReducer?.userList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList())
  }, [])


  // search user from the list on any column
  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '' && userList && userList.length > 0) {
      dispatch(searchUser(userList, event.target.value.toLowerCase()))
    } else {
      dispatch(getUserList());
    }
  }

  return (
    <div className="App">
      <div className="input-group rounded search-div">
        <input type="search" className="w-50 form-control rounded" onChange={handleOnChangeSearch} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>

      </div>
      <div className="user-div">
        {
          userList && userList.length > 0 &&
          <UserList
            userList={userList}
          />
        }
      </div>
    </div>
  );
}

export default App;
