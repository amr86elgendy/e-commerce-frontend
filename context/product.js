import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from 'react';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS':
      return {
        ...state,
        products: action.payload,
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
  currency: 'EGP'
}

// create context
const ProductContext = createContext({})

// context provider
export const ProductProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  //const {isLoading, isError} = useQuery(fetcher, {})

  useEffect(() => {
    const loadProducts = async (color, size) => {
      
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/products`
      );

      dispatch('ALL_PRODUCTS', data.products);
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
