import axios from 'axios';
import { put, takeLatest, all, call } from 'redux-saga/effects';
import { SEARCH_USER_REQUESTED, USER_LIST_RECEIEVED, USER_LIST_REQUESTED } from '../constants/actionTypes';
import { getUserData } from '../service/service';

interface IUserPayload {
  type: string,
  payload: any,
  searchValue: string
}

// get list of user
function* getUserList(): any {
  const response = yield call(getUserData);
  yield put({ type: USER_LIST_RECEIEVED, payload: response.data });
}

// search the user as per user input value
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