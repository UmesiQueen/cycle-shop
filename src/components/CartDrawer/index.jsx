import React from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { DeleteOutlined, ClearRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { CartItemsContext } from "../../hooks/CartContext";
import { GlobalContext } from "../../hooks/AppContext";

const CartDrawer = () => {
  const { cartTotal, cartItems, setCartItems } =
    React.useContext(CartItemsContext);
  const { drawerState, setDrawerState } = React.useContext(GlobalContext);

  const handleDelete = (orderId) => {
    setCartItems((prev) => prev.filter((item) => item.orderId !== orderId));
  };

  return (
    <Drawer
      anchor={"right"}
      open={drawerState}
      //  onClose={toggleDrawer(false)}
    >
      <Box
        role="presentation"
        className="flex flex-col h-full w-[300px] md:w-[560px]"
      >
        <div className="flex justify-between py-2 px-6">
          <h4>Shopping Cart</h4>
          <button
            onClick={() => setDrawerState(false)}
            className=" transition duration-500 hover:-rotate-90 "
          >
            <ClearRounded />
          </button>
        </div>
        <Divider />
        <List className="!px-6 !pt-4">
          {cartItems.map((cartItem) => (
            <ListItem
              key={cartItem?.orderId}
              className=" border-b !px-0 !py-3 text-sm md:text-base "
            >
              <ListItemIcon>
                <img
                  src={cartItem?.src}
                  alt={cartItem?.name}
                  width={65}
                  height={65}
                />
              </ListItemIcon>
              <div className="ml-4">
                <h5>{cartItem?.name}</h5>

                <p className="text-global-color-3 flex items-center">
                  <span className="font-semibold ">{cartItem?.quantity}</span>
                  <span className="font-semibold px-1 text-xs ">x</span>
                  <span>${cartItem?.cost}</span>
                </p>
              </div>
              <button
                className=" ml-auto text-gray-300 py-1 px-2 rounded-full hover:bg-gray-300/20 hover:text-gray-700 transition duration-300 mt-auto md:mt-0"
                type="button"
                onClick={() => {
                  handleDelete(cartItem?.orderId);
                }}
              >
                <DeleteOutlined fontSize="small" />
              </button>
            </ListItem>
          ))}
        </List>

        <div className="flex flex-col gap-4 mt-auto">
          <Divider />
          <p className="inline-flex justify-between px-6">
            <b>Subtotal:</b>
            <span>${cartTotal}</span>
          </p>
          <Divider />
          <div className="flex flex-col gap-5 px-6 pb-5 pt-1">
            <Link to="cart" onClick={() => setDrawerState(false)}>
              <button className="btn w-full">VIEW CART</button>
            </Link>
            <Link to="checkout" onClick={() => setDrawerState(false)}>
              <button className="btn w-full">CHECKOUT</button>
            </Link>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
