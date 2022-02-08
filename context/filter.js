import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './product';
import reducer from '../functions/filter'

// initial state
const initialState = {
  filtered_products: [],
  all_products: [],
  sort: 'low-high',
  filters: {
    text: '',
    brand: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

// create context
const FilterContext = createContext();

// context provider
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();
  // console.log(state.filters);
  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORT_PRODUCTS' });
  }, [products, state.sort, state.filters]);

  const updateSort = (e) => {
    dispatch({ type: 'UPDATE_SORT', payload: e.target.value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = Number(value);
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, updateFilters, dispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
