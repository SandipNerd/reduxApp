export const SET_USER = 'SET_USER';

export const setUserData = info => {
  return {type: SET_USER, userInfo: info};
};
