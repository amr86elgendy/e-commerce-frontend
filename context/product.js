import { createContext, useContext, useEffect, useReducer } from 'react';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        newArrival: action.payload
          .sort((a, b) => b.createdAt - a.createdAt)
          .slice(0, 4),
      };
    case 'SET_CURRENCY':
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
}

// initial state
const initialState = {
  products: [],
  newArrival: [],
  bestSeller: [],
  currency: 'EGP'
}

// create context
const ProductContext = createContext({})

// context provider
export const ProductProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/products`
      );
      const data = await res.json();
      
      dispatch('ALL_PRODUCTS', data)
    }
    loadProducts()
    return () => console.log('cleanup product context')
  }, [])
  // console.log(state)

  return (
    <ProductContext.Provider value={{...state, dispatch}}>{children}</ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
