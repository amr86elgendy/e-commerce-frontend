import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { showMe } from '../apis/auth';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload.user };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// initial state
const initialState = {
  isAuthenticated: false,
  user: null,
};

// create context
const UserContext = createContext({});

// context provider
export const UserProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  useEffect(() => {
    if (localStorage.getItem('ishop-token')) {
      showMe(localStorage.getItem('ishop-token')).then((data) =>
        dispatch('LOGIN', data)
      );
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
