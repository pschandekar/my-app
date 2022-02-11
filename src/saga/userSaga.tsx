import axios from 'axios';
import { put, takeLatest, all, call } from 'redux-saga/effects';
import { SEARCH_USER_REQUESTED, USER_LIST_RECEIEVED, USER_LIST_REQUESTED } from '../constants/actionTypes';

interface IUserPayload {
  type: string,
  payload: any,
  searchValue: string
}

function* getUserList(): any {
  const response = yield axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response
  })

  yield put({ type: USER_LIST_RECEIEVED, payload: response.data });
}

function* searchUser(action: IUserPayload): any {
  // exclude column list from filter
  const excludeColumns = ["id"];
  let updatedList = action.payload;
  const searchValue = action.searchValue.toLowerCase();

  updatedList = updatedList.filter((item: any) => {
    return Object.keys(item).some(key =>
      excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(searchValue)
    );
  });

  yield put({ type: USER_LIST_RECEIEVED, payload: updatedList });
}

function* actionWatcher() {
  yield takeLatest(USER_LIST_REQUESTED, getUserList)
  yield takeLatest(SEARCH_USER_REQUESTED, searchUser)
}

export default function* userSaga() {
  yield all([actionWatcher()]);
}