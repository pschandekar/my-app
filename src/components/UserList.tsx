import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser, searchUser } from "../actions/userAction";
import { IUserList } from "../App";

interface IProp {
    userList: Array<IUserList>
}

function UserList(props: IProp) {

    return (
        <div className="App">
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
                        props.userList && props.userList.length > 0 && props.userList.map((userData: IUserList) => {
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

export default UserList;
