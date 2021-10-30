const cart_reducer = (state, action) => {
  if (action.type === 'SET_CART') {
    return {
      ...state,
      cart: action.payload,
    };
  }
  if (action.type === 'ADD_TO_CART') {
    const { _id, color, amount, product } = action.payload;
    const oldItem = state.cart.find((i) => i._id === _id + color);
    if (oldItem) {
      const arr = state.cart.map((cartItem) => {
        if (cartItem === oldItem) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: arr };
    } else {
      const newItem = {
        _id: _id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0],
        price: product.price,
        max: product.quantity,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === 'REMOVE_CART_ITEM') {
    const newCartItems = state.cart.filter(
      (item) => item._id !== action.payload
    );
    return { ...state, cart: newCartItems };
  }
  if (action.type === 'TOGGLE_CART_ITEM_AMOUNT') {
    const { _id, value } = action.payload;
    const newCartItem = state.cart.map((item) => {
      if (item._id === _id) {
        if (value === 'inc') {
          const stock = item.max;
          if (item.amount === stock) return item;
          return { ...item, amount: item.amount + 1 };
        }
        if (value === 'dec') {
          if (item.amount === 1) return item;
          return { ...item, amount: item.amount - 1 };
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: newCartItem };
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'COUNT_CART_TOTALS') {
    const { total_amount, total_items } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item;
        
        total.total_items += amount;
        total.total_amount += amount * price;

        return total;
      },
      {
        total_amount: 0,
        total_items: 0,
      }
    );
    return { ...state, total_amount, total_items };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
