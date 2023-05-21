// reducers/loginReducer.js

const initialState = {
    username: '',
    password: '',
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGIN_DATA':
        return {
          ...state,
          username: action.payload.username,
          password: action.payload.password,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  