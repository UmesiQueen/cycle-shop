import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartItemsContext = React.createContext();

const CartContext = ({ children }) => {
  const retrievedCartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = React.useState(retrievedCartItems);
  const [cartTotal, setCartTotal] = React.useState(0);

  React.useEffect(() => {
    setCartTotal(sumCartItems);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  function addToCart(newOrder) {
    const newCartItems = updateOrInsertNewOrder(newOrder);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems)); 
    setCartTotal(sumCartItems);
     toast.success("Added to cart!");
  }

  function updateOrInsertNewOrder(newOrder) {
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
      return [...cartItems, { ...newOrder, orderId: Date.now() }];
    }
    // if array is empty, add newOrder to cart
    return [{ ...newOrder, orderId: Date.now() }];
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

  return (
    <CartItemsContext.Provider
      value={{
        addToCart,
        cartItems,
        cartTotal,
        setCartItems,
      }}
    >
      {children}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
      
      />
    </CartItemsContext.Provider>
  );
};

export default CartContext;
