import { createContext, useContext, useEffect, useReducer } from 'react';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, authenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, authenticated: false, user: null };
    case 'STOP_LOADING':
      return { ...state, loading: false };
    default:
      return state;
  }
};

// initial state
const initialState = {
  authenticated: false,
  user: null,
  loading: true,
};

// create context
const UserContext = createContext({});

// context provider
export const UserProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch('LOGIN', JSON.parse(localStorage.getItem('user')));
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
