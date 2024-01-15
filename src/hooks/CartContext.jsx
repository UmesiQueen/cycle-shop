import { createContext, useState, useEffect } from "react";

// const defaultOrderState = {
//   // orderId:0,
//   // userId:0,
// };

const defaultCartItems = [
  {
    productId: 1,
    type: "Accessories",
    sizes: [
      { size: "xl", quantity: 2, cost: "40.00" },
      { size: "m", quantity: 3, cost: "35.00" },
    ],
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

  useEffect(() => {
    setCartTotal(sumCartItems(cartItems));
  }, [cartItems]);

  function addToCart() {
    const newCartItems =
      newOrder.type === "Accessories"
        ? updateOrInsertAccessoryOrder(cartItems, newOrder)
        : updateOrInsertBicycleOrder(cartItems, newOrder);

    setCartItems(newCartItems);
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

function updateOrInsertBicycleOrder(cartItems, newOrder) {
  if (cartItems.length > 0) {
    // check if newOrder already exists in cart
    const prevOrderIndex = cartItems.findIndex(
      (prev) => prev.productId === newOrder.productId
    );

    if (prevOrderIndex !== -1) {
      // if newOrder exists, increase quantity by newOrder value
      cartItems[prevOrderIndex].quantity += newOrder.quantity;
      return [...cartItems];
    }
    // push newOrder into cartItems, if newOrder does not exist
    cartItems.push(newOrder);
    return [...cartItems];
  }
  // if array is empty, add new cart item
  return [newOrder];
}

function updateOrInsertAccessoryOrder(cartItems, newOrder) {
  const { productId, type, size, quantity, cost } = newOrder;

  //check that cart is not empty
  if (cartItems.length > 0) {
    const prevOrderIndex = cartItems.findIndex(
      (prev) => prev.productId === productId
    );

    // check if newOrder already exists in cart
    if (prevOrderIndex !== -1) {
      const prevOrder = cartItems[prevOrderIndex];

      const prevSizeIndex = prevOrder.sizes.findIndex(
        (item) => item.size === size
      );

      if (prevSizeIndex !== -1) {
        // update quantity if the newOrder size already exists in cart
        prevOrder.sizes[prevSizeIndex].quantity += quantity;
        return [...cartItems];
      }

      // update cartItem with new size, if it doesn't already exists in cart
      prevOrder.sizes.push({ size, quantity, cost });
      return [...cartItems];
    }

    // insert new cart item if it doesn't already exist
    return [
      ...cartItems,
      { productId, type, sizes: [{ size, quantity, cost }] },
    ];
  }
  // if array is empty, add new cart item
  return [{ productId, type, sizes: [{ size, quantity, cost }] }];
}

function sumCartItems(cartItems) {
  let cost = 0;

  if (cartItems.length > 0) {
    cartItems.map((order) => {
      order.type === "Accessories"
        ? order.sizes.map((item) => {
            cost += Number(item.quantity) * Number(item.cost);
            return cost;
          })
        : (cost += Number(order.quantity) * Number(order.cost));

      return cost;
    });
  }
  return cost;
}
