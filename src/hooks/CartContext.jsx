import { createContext, useState, useEffect } from "react";

// const defaultOrderState = {
//   // orderId:0,
//   // userId:0,
// };

const defaultCartItems = [
  {
    productId: 1,
    type: "Accessories",
    size: "xl",
    quantity: 2,
    cost: "40.00",
  },
  {
    productId: 1,
    type: "Accessories",
    size: "m",
    quantity: 2,
    cost: "35.00",
  },
  {
    productId: 13,
    type: "Bicycles",
    quantity: 2,
    cost: "350.00",
  },
];

export const CartItemsContext = createContext();

const CartContext = ({ children }) => {
  const [newOrder, setNewOrder] = useState();
  const [cartItems, setCartItems] = useState(defaultCartItems);
  const [cartTotal, setCartTotal] = useState(0);
  const [isClicked, setClickedState] = useState(false);

  useEffect(() => {
    setCartTotal(sumCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isClicked) {
      setCartTotal(sumCartItems());
      setClickedState(!isClicked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClicked]);

  function addToCart() {
    setClickedState(true);
    const newCartItems = updateOrInsertNewOrder();
    setCartItems(newCartItems);
  }

  function updateOrInsertNewOrder() {
    const { productId, type, size, quantity } = newOrder;

    if (cartItems.length > 0) {
      let prevOrderIndex;

      if (type === "Accessories") {
        prevOrderIndex = cartItems.findIndex(
          (prev) => prev.productId === productId && prev.size === size
        );
      } else {
        prevOrderIndex = cartItems.findIndex(
          (prev) => prev.productId === productId
        );
      }

      if (prevOrderIndex !== -1) {
        // if newOrder id exists, increase quantity by newOrder value
        cartItems[prevOrderIndex].quantity += quantity;
        return cartItems;
      }

      // if newOrder does not exist, add newOrder to cart
      return [...cartItems, newOrder];
    }
    // if array is empty, add newOrder to cart
    return [newOrder];
  }

  function sumCartItems() {
    let cost = 0;
    if (cartItems.length > 0) {
      cartItems.map(
        (cartItem) =>
          (cost += Number(cartItem.quantity) * Number(cartItem.cost))
      );
      return cost;
    }
  }

  return (
    <CartItemsContext.Provider
      value={{ setNewOrder, addToCart, cartItems, cartTotal }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartContext;
