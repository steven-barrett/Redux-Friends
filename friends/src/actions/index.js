// Let's build some action creators 😃
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
      .get('/friends')
      .then(res => {        
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {      
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
      });
  };

  export const ADD_FRIEND = 'ADD_FRIEND';
  export const addFriend = item => dispatch => {
    axiosWithAuth()
      .post('/friends', item)
      .then(res => {        
        dispatch({ type: ADD_FRIEND, payload: res.data });
      })
      .catch(err => {      
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
      });
  };
