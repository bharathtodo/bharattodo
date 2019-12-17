import {  takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes'
import * as services from "./service"
import * as actions from "./actions"


function* requestTODO(action){
  try {
    const response  = yield call(services.requestTODO, action.payload.todoNum)
    console.log("=====>",response)
    yield put(actions.requestTODOSuccess(response))
  } catch (error) {
    yield put(actions.requestTODOFailure(error))
  }
}

function* exampleWatcher() {
  yield takeLatest(actionTypes.REQUEST_TODO, requestTODO)
}


export default exampleWatcher;