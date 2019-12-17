import { all } from 'redux-saga/effects';
import ExampleSaga from '../src/example/saga'

export default function* IndexSaga() {
	yield all([ExampleSaga()]);
}
