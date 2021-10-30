import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './product';
import reducer from '../functions/filter'

// initial state
const initialState = {
  filtered_products: [],
  all_products: [],
  sort: 'Price, low to high',
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

// const reducer = (state, action) => {
//   if (action.type === 'LOAD_PRODUCTS') {
//     let maxPrice = action.payload.map((p) => p.price);
//     maxPrice = Math.max(...maxPrice);

//     return {
//       ...state,
//       all_products: [...action.payload],
//       filtered_products: [...action.payload],
//       filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
//     };
//   }
//   if (action.type === 'UPDATE_SORT') {
//     return { ...state, sort: action.payload };
//   }
//   if (action.type === 'SORT_PRODUCTS') {
//     const { sort, filtered_products } = state;
//     let arr = [...filtered_products];

//     if (sort === 'low-to-high') {
//       arr = arr.sort((a, b) => a.price - b.price);
//     }
//     if (sort === 'high-to-low') {
//       arr = arr.sort((a, b) => b.price - a.price);
//     }
//     if (sort === 'a-z') {
//       arr = arr.sort((a, b) => a.name.localeCompare(b.name));
//     }
//     if (sort === 'z-a') {
//       arr = arr.sort((a, b) => b.name.localeCompare(a.name));
//     }
//     if (sort === 'old-to-new') {
//       arr = arr.sort(
//         (a, b) =>
//           new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
//       );
//     }
//     if (sort === 'new-to-old') {
//       arr = arr.sort(
//         (a, b) =>
//           new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
//       );
//     }
//     return { ...state, filtered_products: arr };
//   }
//   if (action.type === 'UPDATE_FILTERS') {
//     const { name, value } = action.payload;
//     return { ...state, filters: { ...state.filters, [name]: value } };
//   }
//   if (action.type === 'FILTER_PRODUCTS') {
//     const { all_products } = state;
//     const { text, category, brand, color, price, shipping } = state.filters;
//     let arr = [...all_products];
//     // Text
//     if (text) {
//       arr = arr.filter((product) =>
//         product.name.toLowerCase().startsWith(text)
//       );
//     }
//     // Category
//     if (category !== 'all') {
//       arr = arr.filter((product) => product.category === category);
//     }
//     // Brand
//     if (brand !== 'all') {
//       arr = arr.filter((product) => product.brand === brand);
//     }
//     // Colors
//     if (color !== 'all') {
//       arr = arr.filter((product) => product.colors.find((c) => c === color));
//     }
//     // Price
//     arr = arr.filter((product) => product.price <= price);
//     // Shipping
//     if (shipping) {
//       arr = arr.filter((product) => product.shipping === true);
//     }
//     return { ...state, filtered_products: arr };
//   }
//   if (action.type === 'CLEAR_FILTERS') {
//     return {
//       ...state,
//       filters: {
//         ...state.filters,
//         text: '',
//         brand: 'all',
//         category: 'all',
//         color: 'all',
//         price: state.filters.max_price,
//         shipping: false,
//       },
//     };
//   }
//   throw new Error(`No Matching "${action.type}" - action type`);
// };

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
