
export const setLoginData = (username, password) => {
    return {
      type: 'SET_LOGIN_DATA',
      payload: { username, password },
    };
  };
  