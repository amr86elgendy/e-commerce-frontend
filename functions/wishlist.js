const wishlist_reducer = (state, action) => {
  if (action.type === 'SET_WISHLIST') {
    return {
      ...state,
      wishlist: action.payload,
    };
  }
  if (action.type === 'ADD_TO_WISHLIST') {
    const { product } = action.payload;
    const oldItem = state.wishlist.find((i) => i._id === product._id);
    if (oldItem) {
      return { ...state };
    } else {
      localStorage.setItem(
        'wishlist',
        JSON.stringify([...state.wishlist, product])
      );
      return { ...state, wishlist: [...state.wishlist, product] };
    }
  }
  if (action.type === 'REMOVE_WISHLIST_ITEM') {
    const newWishlist = state.wishlist.filter(
      (item) => item._id !== action.payload
    );
    localStorage.setItem('wishlist', JSON.stringify([...newWishlist]));
    return { ...state, wishlist: newWishlist };
  }
  if (action.type === 'CLEAR_WISHLIST') {
    return { ...state, wishlist: [] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default wishlist_reducer;
