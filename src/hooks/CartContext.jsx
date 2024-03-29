import { createContext, useState, useEffect } from "react";
import { productData } from "../assets/data/products";

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
  const [cartItemsData, setCartItemsData] = useState([]);

  useEffect(() => {
    setCartTotal(sumCartItems);
    setCartItemsData(filterProductData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isClicked) {
      setCartTotal(sumCartItems);
      setClickedState(!isClicked);
      setCartItemsData(filterProductData);
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

    if (cartItems.length) {
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
    if (cartItems.length) {
      cartItems.map(
        (cartItem) =>
          (cost += Number(cartItem.quantity) * Number(cartItem.cost))
      );
      return cost;
    }
    return cost;
  }

  function filterProductData() {
    if (cartItems.length) {
      return cartItems.map(
        (cartItem) =>
          ({
            ...productData
              .filter((data) => data.productId === cartItem.productId)
              .map((data) => ({
                productId: data.productId,
                name: data.name,
                size: cartItem.size,
                src: data.src,
                quantity: cartItem.quantity,
                cost: cartItem.cost,
              })),
          }[0])
      );
    }
    return [];
  }

  return (
    <CartItemsContext.Provider
      value={{ setNewOrder, addToCart, cartItems, cartTotal, cartItemsData }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartContext;
