import { USER_LIST_RECEIEVED, USER_LIST_REQUESTED } from "../constants/actionTypes"
//import service from "../service";

const initialState = {
  userList: []
}

export default function userReduc(state = initialState, action: any) {

  switch (action.type) {
    case USER_LIST_REQUESTED:
      return { ...state, userList: action.payload }
    case USER_LIST_RECEIEVED:
      return { ...state, userList: action.payload }

    default:
      return state;
  }

}