import { createContext, useContext, useReducer } from 'react';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR_CART':
      return { ...state, openSidebarRight: true, inside: 'cart' };
    case 'OPEN_SIDEBAR_LOGIN':
      return { ...state, openSidebarRight: true, inside: 'login' };
    case 'OPEN_SIDEBAR_FILTER':
      return { ...state, openSidebarLeft: true, inside: 'filter' };
    case 'OPEN_SIDEBAR_MENU':
      return { ...state, openSidebarLeft: true, inside: 'menu' };
    case 'CLOSE_SIDEBAR_RIGHT':
      return { ...state, openSidebarRight: false };
    case 'CLOSE_SIDEBAR_LEFT':
      return { ...state, openSidebarLeft: false };
    case 'TOGGLE_FILTER':
      return { ...state, openFilter: !state.openFilter };
    case 'TOGGLE_SORT_LIST':
      return { ...state, openSortList: !state.openSortList };
    case 'SET_GRIDVIEW':
      return { ...state, grid: action.payload, listView: false };
    case 'SET_LISTVIEW':
      return { ...state, grid: null, listView: true };
    default:
      return state;
  }
};

// initial state
const initialState = {
  openSidebarRight: false,
  openSidebarLeft: false,
  inside: '',
  openFilter: false,
  openSortList: false,
  grid: null,
  listView: false,
};

// create context
const GlobalContext = createContext({});

// context provider
export const GlobalProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
