// authReducer.ts

import { AuthActionTypes, LOGIN_ADMIN_REQUEST, LOGIN_ADMIN_SUCCESS, LOGIN_ADMIN_FAILURE, LOGOUT_ADMIN } from '../actions/authAction';

export interface AuthState {
  loading: boolean;
  data: any | null;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  loading: false,
  data: null,
  error: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_ADMIN_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
      case LOGOUT_ADMIN: 
        return {
          ...state,
          data: null, 
          isLoggedIn: false,
        };
    default:
      return state;
  }
};

export default authReducer;
