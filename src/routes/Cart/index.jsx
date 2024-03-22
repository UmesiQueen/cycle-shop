import React from "react";
import { CancelOutlined } from "@mui/icons-material";

const Cart = () => {
  return (
    <div className="text-black m-3 bg-global-color-5">
      <h3 className="capitalize mt-5 mb-10">Cart</h3>
      <div className="text-center">
        <p>Cart is empty.</p>
        <CancelOutlined fontSize="large" />
      </div>
    </div>
  );
};

export default Cart;
