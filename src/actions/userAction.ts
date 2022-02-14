import { USER_LIST_REQUESTED, SEARCH_USER_REQUESTED } from "../constants/actionTypes";
import { IUserList } from "../interface/IUserList";

export function getUserList() {
    return { type: USER_LIST_REQUESTED }
}

export function searchUser(data: Array<IUserList>, searchValue: string) {
    return {
        type: SEARCH_USER_REQUESTED,
        payload: data,
        searchValue
    }
}