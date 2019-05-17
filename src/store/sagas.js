import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODO_LIST } from './actionTypes'
import { initDataAction } from './actionCreatorsSaga'
import axios from 'axios'
function* getTodoList() {
  try {
    const res = yield axios.get('http://localhost:3200/data')
    const action = initDataAction(res.data)
    yield put(action)
  } catch (err) {
    console.log(err.message)
  }
}

export default function* mySaga() {
  yield takeEvery(GET_TODO_LIST, getTodoList)
}
