import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../functions/cart'
import useLocalStorage from '../hooks/useLocalStorage'

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [cartStorage, setCartStorage] = useLocalStorage('ishop-cart');
  
  useEffect(() => {
    if (cartStorage) {
      dispatch({
        type: 'SET_CART',
        payload: cartStorage,
      });
    }
  }, []);

  const addToCart = (_id, color, amount, product) =>
    dispatch({ type: 'ADD_TO_CART', payload: { _id, color, amount, product } })

  const removeItem = (_id) => dispatch({ type: 'REMOVE_CART_ITEM', payload: _id })

  const toggleAmount = (_id, value) =>
    dispatch({
      type: 'TOGGLE_CART_ITEM_AMOUNT',
      payload: { _id, value },
    })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  useEffect(() => {
    dispatch({ type: 'COUNT_CART_TOTALS' })
    setCartStorage(state.cart);
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
