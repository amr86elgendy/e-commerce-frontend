import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../functions/wishlist';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
  wishlist: [],
};
const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [wishlistStorage, setWishlistStorage] = useLocalStorage('ishop-wishlist', []);

  useEffect(() => {
    if (wishlistStorage) {
      dispatch({
        type: 'SET_WISHLIST',
        payload: wishlistStorage,
      });
    }
  }, []);

  useEffect(() => setWishlistStorage(state.wishlist), [state.wishlist]);

  const addToWishlist = (product) =>
    dispatch({ type: 'ADD_TO_WISHLIST', payload: { product } });

  const removeItemFromWishlist = (_id) =>
    dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: _id });

    const clearWishlist = () => {
      dispatch({ type: 'CLEAR_WISHLIST' });
      localStorage.removeItem('wishlist')
    };

  return (
    <WishlistContext.Provider
      value={{ ...state, addToWishlist, removeItemFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// make sure use
export const useWishlistContext = () => {
  return useContext(WishlistContext)
}