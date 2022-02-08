
const filter_reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === 'UPDATE_SORT') {
    return { ...state, sort: action.payload };
  }
  if (action.type === 'SORT_PRODUCTS') {
    const { sort, filtered_products } = state;
    let arr = [...filtered_products];

    if (sort === 'low-high') {
      arr = arr.sort((a, b) => a.price - b.price);
    }
    if (sort === 'high-low') {
      arr = arr.sort((a, b) => b.price - a.price);
    }
    if (sort === 'a-z') {
      arr = arr.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === 'z-a') {
      arr = arr.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sort === 'old-new') {
      arr = arr.sort(
        (a, b) =>
          new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
      );
    }
    if (sort === 'new-old') {
      arr = arr.sort(
        (a, b) =>
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
      );
    }
    return { ...state, filtered_products: arr };
  }
  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === 'FILTER_PRODUCTS') {
    const { all_products } = state;
    const { text, category, brand, color, price, shipping } = state.filters;
    let arr = [...all_products];
    // Text
    if (text) {
      arr = arr.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    // Category
    if (category !== 'all') {
      arr = arr.filter((product) => product.category === category);
    }
    // Brand
    if (brand !== 'all') {
      arr = arr.filter((product) => product.brand === brand);
    }
    // Colors
    if (color !== 'all') {
      arr = arr.filter((product) => product.colors.find((c) => c === color));
    }
    // Price
    arr = arr.filter((product) => product.price <= price);
    // Shipping
    if (shipping) {
      arr = arr.filter((product) => product.shipping === true);
    }
    return { ...state, filtered_products: arr };
  }
  if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        brand: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer
