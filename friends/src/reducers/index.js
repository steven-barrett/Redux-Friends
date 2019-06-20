import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_FRIEND
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingData: false,
    loggingIn: false,
    friends: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          error: '',
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          error: ''
        };
      case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          fetchingData: true
        };
        case FETCH_DATA_SUCCESS:
        return {
          ...state,
          fetchingData: false,
          friends: action.payload
        };
      case ADD_FRIEND:
        return {
          ...state,
          fetchingData: false,
          friends: [...state.friends, action.payload]
        };
          case FETCH_DATA_FAILURE:
        return {
          ...state,
          fetchingData: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  