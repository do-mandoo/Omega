import { handleActions } from 'redux-actions';
// import * as API from '../lib/api';
import * as API from '../lib/getApi';
// import { call, put, takeLatest } from 'redux-saga/effects';

// 액션타입 정의
// 한 요청당 세 개를 만들어야 한다.
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// Thunk함수 생성
// Thunk함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.
export const getPostItem = () => async dispatch => {
  dispatch({ type: GET_POST }); // 요청시작을 알림
  console.log(2);
  // const result = API.getPost(1);
  // console.log(result.data, 'result');
  try {
    console.log(3);
    const res = await API.getPost();
    console.log(res.data, 'res.data');
    dispatch({
      type: GET_POST_SUCCESS,
      payload: res.data,
    }); // 요청 성공
  } catch (error) {
    console.log(4);
    dispatch({
      type: GET_POST_FAILURE,
      payload: error,
      error: true,
    }); // 에러 발생
    throw error; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌.
  }
};

/* // Saga함수 생성
export const getPost = createAction(GET_POST, id => id);
function* getPostSaga(action) {
  // yield put(GET_POST);
  try {
    const post = yield call(API.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (error) {
    yield put({
      type: GET_POST_FAILURE,
      payload: error,
      error: true,
    });
  }
}

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
} */

// 초기상태를 선언
// 요청의 로딩 중 상태는 loading객체에서 관리.
const initialState = {
  loading: {
    GET_POST: false,
  },
  post: null,
};

const sample = handleActions(
  {
    [GET_POST]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true, // 요청 시작
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청 완료
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청 완료
      },
    }),
  },
  initialState,
);

export default sample;

// import { handleActions } from 'redux-actions';
// import * as api from '../lib/api';

// // 액션 타입을 선언
// // 한 요청당 세 개를 만들어야 함

// const GET_POST = 'sample/GET_POST';
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// // const GET_USERS = 'sample/GET_USERS';
// // const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// // const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// // thunk 함수를 생성
// // thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); // 요청 실패
//     throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있도록 해줌
//   }
// };

// // export const getUsers = () => async dispatch => {
// //   dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
// //   try {
// //     const response = await api.getUsers();
// //     dispatch({
// //       type: GET_USERS_SUCCESS,
// //       payload: response.data,
// //     }); // 요청 성공
// //   } catch (e) {
// //     dispatch({
// //       type: GET_USERS_FAILURE,
// //       payload: e,
// //       error: true,
// //     }); // 에러발생
// //     throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
// //   }
// // };

// // 초기 상태를 선언
// // 요청의 로딩 중 상태는 loading이라는 객체에서 관리

// const initialState = {
//   loading: {
//     GET_POST: false,
//     // GET_USERS: false,
//   },
//   post: null,
//   // users: null,
// };

// const sample = handleActions(
//   {
//     [GET_POST]: state => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: true, // 요청시작
//       },
//     }),
//     [GET_POST_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: false, // 요청 완료
//       },
//       post: action.payload,
//     }),
//     [GET_POST_FAILURE]: (state, action) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: false, // 요청 완료
//       },
//     }),
//     // [GET_USERS]: state => ({
//     //   ...state,
//     //   loading: {
//     //     ...state.loading,
//     //     GET_USERS: true, // 요청 시작
//     //   },
//     // }),
//     // [GET_USERS_SUCCESS]: (state, action) => ({
//     //   ...state,
//     //   loading: {
//     //     ...state.loading,
//     //     GET_USERS: false, // 요청 완료
//     //   },
//     //   users: action.payload,
//     // }),
//     // [GET_USERS_FAILURE]: (state, action) => ({
//     //   ...state,
//     //   loading: {
//     //     ...state.loading,
//     //     GET_USERS: false, // 요청 완료
//     //   },
//     // }),
//   },
//   initialState,
// );

// export default sample;
