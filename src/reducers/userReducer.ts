import { SEARCH_USER_RECEIEVED, USER_LIST_RECEIEVED } from "../constants/actionTypes"

const initialState = {
  userList: [],
  filteredUserList: []
}

export default function userReduc(state = initialState, action: any) {

  switch (action.type) {
    case USER_LIST_RECEIEVED:
      return { ...state, userList: action.payload }
    case SEARCH_USER_RECEIEVED:
      return { ...state, filteredUserList: action.payload }

    default:
      return state;
  }

}