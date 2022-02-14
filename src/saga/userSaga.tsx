import { put, takeLatest, all, call } from 'redux-saga/effects';
import { SEARCH_USER_RECEIEVED, SEARCH_USER_REQUESTED, USER_LIST_RECEIEVED, USER_LIST_REQUESTED } from '../constants/actionTypes';
import { IUserList } from '../interface/IUserList';
import { filterUserList, getUserData } from '../service/service';

interface IUserPayload {
  type: string,
  payload: Array<IUserList>,
  searchValue: string
}

// get list of user
function* getUserList(): any {
  const response = yield call(getUserData);
  yield put({ type: USER_LIST_RECEIEVED, payload: response.data });
}

// search the user as per user input value
function* searchUser(action: IUserPayload): any {
  const updatedList = filterUserList(action.payload, action.searchValue.toLowerCase());

  yield put({ type: SEARCH_USER_RECEIEVED, payload: updatedList });
}

function* actionWatcher() {
  yield takeLatest(USER_LIST_REQUESTED, getUserList)
  yield takeLatest(SEARCH_USER_REQUESTED, searchUser)
}

export default function* userSaga() {
  yield all([actionWatcher()]);
}