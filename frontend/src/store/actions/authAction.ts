// authActions.ts
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios ,{AxiosResponse} from 'axios'; 
import { AuthState } from '../reducers/authReducer';
import { API_URL } from '../constant';

export const LOGIN_ADMIN_REQUEST = 'LOGIN_ADMIN_REQUEST';
export const LOGIN_ADMIN_SUCCESS = 'LOGIN_ADMIN_SUCCESS';
export const LOGIN_ADMIN_FAILURE = 'LOGIN_ADMIN_FAILURE';
//for logout
export const LOGOUT_ADMIN = 'LOGOUT_ADMIN';


interface loginAdminRequestAction {
  type: typeof LOGIN_ADMIN_REQUEST;
}

interface loginAdminSuccessAction {
  type: typeof LOGIN_ADMIN_SUCCESS;
  payload: any; 
}

interface loginAdminFailureAction {
  type: typeof LOGIN_ADMIN_FAILURE;
  payload: string;
}

interface logoutAdminAction {
    type: typeof LOGOUT_ADMIN;
  }
  
export type AuthActionTypes =
  | loginAdminRequestAction
  | loginAdminSuccessAction
  | loginAdminFailureAction
  | logoutAdminAction;

export const loginAdminRequest = (): loginAdminRequestAction => ({
  type: LOGIN_ADMIN_REQUEST,
});

export const loginAdminSuccess = (data: any): loginAdminSuccessAction => ({
  type: LOGIN_ADMIN_SUCCESS,
  payload: data,
});

export const loginAdminFailure = (error: string): loginAdminFailureAction => ({
  type: LOGIN_ADMIN_FAILURE,
  payload: error,
});

export const logoutAdmin = (): logoutAdminAction => ({
    type: LOGOUT_ADMIN,
  });

export const loginAdmin = (
  email: string,
  password: string
) : ThunkAction< void,AuthState, unknown, AuthActionTypes>=> {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      dispatch(loginAdminRequest());
      
      const response: AxiosResponse = await axios.post(`${API_URL}/admin/login` ,{
        email,
        password,
      });
      if (!response.data) {
        dispatch(loginAdminFailure('Registration failed'));
      } else {
        dispatch(loginAdminSuccess(response.data));
      }
    } catch (error) {
      console.error(error);
      dispatch(loginAdminFailure('Internal server error'));
    }
  };
};


