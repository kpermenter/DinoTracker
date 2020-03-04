import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../reducers/auth";
import {
  signIn,
  completeSignIn,
  signOut,
  restoreSession
} from "../../utils/session";

// WORKER //
function* startAuth(action) {
  try {
    // first try to restore the session from a saved cookie if it exists
    let authInfos = yield call(restoreSession, action.payload.sessionId);

    // if there isn't a session cookie then we can start a new session
    if (!authInfos) {
      authInfos = yield call(signIn, action.payload);
    }

    // check for a response and finish by sending the authentication info to the Redux store
    if (authInfos) {
      yield put({
        type: types.AUTH_SUCCESS,
        payload: authInfos
      });
    } else {
      // error catching if we need it
      yield put({ type: types.AUTH_FAIL });
    }
  } catch (e) {
    yield put({ type: types.AUTH_FAIL });
    console.error("SAGA ERROR: auth/startAuth, ", e);
  }
}

function* completeAuth(action) {
  try {
    const authInfos = yield call(completeSignIn, action.payload);

    // check for a response and finish by sending the authentication info to the Redux store
    if (authInfos) {
      yield put({
        type: types.AUTH_SUCCESS,
        payload: authInfos
      });
    } else {
      // error catching if we need it
      yield put({ type: types.AUTH_FAIL });
    }
  } catch (e) {
    yield put({ type: types.AUTH_FAIL });
    console.error("SAGA ERROR: auth/startAuth, ", e);
  }
}

function* checkAuth(action) {
  try {
    let authInfos = yield call(restoreSession, action.payload.sessionId);

    // check for a response and finish by sending the authentication info to the Redux store
    if (authInfos) {
      yield put({
        type: types.AUTH_SUCCESS,
        payload: authInfos
      });
    } else {
      // putting a fail call here just means that we didn't need to login
      yield put({ type: types.AUTH_FAIL });
    }
  } catch (e) {
    yield put({ type: types.AUTH_FAIL });
    console.error("SAGA ERROR: auth/checkAuth, ", e);
  }
}

function* authLogout(action) {
  try {
    yield call(signOut, action.payload.sessionId);

    window.location.reload();
  } catch (e) {
    console.error("SAGA ERROR: auth/logout, ", e);
  }
}

// WATCHER //
export function* watchStartAPI() {
  yield takeLatest(types.AUTH_CHECK, checkAuth);
  yield takeLatest(types.AUTH_START, startAuth);
  yield takeLatest(types.AUTH_COMPLETE, completeAuth);
  yield takeLatest(types.LOGOUT, authLogout);
}
