import { createContext, useContext, useReducer } from 'react';

// reducer
const reducer = (state, action) => {
  if (action.type === 'ADD_NOTIFICATION') {
    return [...state, action.payload];
  }
  if (action.type === 'DELETE_NOTIFICATION') {
    return state.filter((notification) => notification.id !== action.payload);
  }
};

// create context
const ToastContext = createContext({});

// context provider
export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
