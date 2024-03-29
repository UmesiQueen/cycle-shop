import React from "react";
import { GlobalContext } from "./AppContext";

export const CartItemsContext = React.createContext();

const CartContext = ({ children }) => {
  const retrievedCartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  const [newOrder, setNewOrder] = React.useState();
  const [cartItems, setCartItems] = React.useState(retrievedCartItems);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [isClicked, setClickedState] = React.useState(false);
  const [cartItemsData, setCartItemsData] = React.useState([]);
  const { productData } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setCartTotal(sumCartItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setCartItemsData(filterProductData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  React.useEffect(() => {
    if (isClicked) {
      setCartTotal(sumCartItems);
      setClickedState(!isClicked);
      setCartItemsData(filterProductData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClicked]);

  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
                name: cartItem?.size
                  ? `${data?.name} - ${cartItem?.size.toUpperCase()}`
                  : data?.name,
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
