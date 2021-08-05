import {SET_USER} from '../actions/users';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, users: action.userInfo};
    default:
      return state;
  }
  return state;
};

export default usersReducer;
