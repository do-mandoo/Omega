// import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
// import counterReducer from './counter';
import sample from './sample';

const rootReducer = combineReducers({
  // counterReducer,
  sample,
});

// export function* rootSaga() {
//   yield all([sampleSaga()]);
// }
export default rootReducer;
