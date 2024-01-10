import { createContext, useState, useEffect } from "react";

const defaultOrderState = {
  // orderId:0,
  // userId:0,
  // productId: 0,
  quantity: 1,
};

const defaultCartItems = [
  {
    productId: 1,
    sizes: [
      { size: "xl", quantity: 2 },
      { size: "m", quantity: 3 },
    ],
  },
  {
    productId: 13,
    quantity: 2,
  },
];

export const CartItemsContext = createContext();

const CartContext = ({ children }) => {
  const [currentOrder, setCurrentOrder] = useState(defaultOrderState);
  const [cartItems, setCartItems] = useState(defaultCartItems);

  useEffect(() => {
    console.log(cartItems, "cart Items");
  }, [cartItems]);

  //   FIXME: Carter for all product cases
  function addToCart(addToCartBtn) {
    addToCartBtn.current.innerHTML = "Adding to Cart...";
    addToCartBtn.current.disabled = true;

    const newCartItems = updateOrInsert();
    setCartItems(newCartItems);

    setCurrentOrder((prev) => ({ ...prev, quantity: 1 })); //set quantity to default 1

    setTimeout(() => {
      addToCartBtn.current.innerHTML = "Add to Cart";
      addToCartBtn.current.disabled = false;
    }, 300);
  }

  function updateOrInsert() {
    if (cartItems !== null) {
      const productExists = cartItems.findIndex(
        (prev) => prev.productId === currentOrder.productId
      );

      if (productExists !== -1) {
        cartItems[productExists].quantity += currentOrder.quantity;
        return [...cartItems];
      }

      return [...cartItems, currentOrder];
    }

    return [currentOrder];
  }

  return (
    <CartItemsContext.Provider value={{ setCurrentOrder, addToCart }}>
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartContext;
