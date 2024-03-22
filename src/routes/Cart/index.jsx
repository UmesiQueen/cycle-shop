import React from "react";
import { CancelOutlined } from "@mui/icons-material";

const Cart = () => {
  return (
    <div className="__container h-full">
      <div className="text-black m-3 bg-global-color-5 my-4 md:my-12 lg:my-20">
        <h3 className="capitalize mt-5 mb-10">Cart</h3>
        <div className="text-center">
          <p>Cart is empty.</p>
          <CancelOutlined fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
