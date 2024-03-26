import React from "react";
import { Link } from "react-router-dom";
import {
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import { AddShoppingCart, DeleteOutlined } from "@mui/icons-material";

import { CartItemsContext } from "../../hooks/CartContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: "#4b4f58",
    fontWeight: 600,
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 0,
    borderTop: "1px #ddd solid",
  },
  "&:first-of-type": {
    width: "50px",
  },
  "&:nth-of-type(3)": {
    width: "200px",
  },
  "&:nth-of-type(2),&:nth-of-type(4), &:nth-of-type(5),&:nth-of-type(6)": {
    width: "100px",
  },
}));

const Cart = () => {
  const { cartItemsData } = React.useContext(CartItemsContext);

  const CartTable = () => {
    const handleOnChange = (event) => {
      // do stuff
    };

    return (
      <TableContainer sx={{ border: "1px #ddd solid" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell />
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Subtotal</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItemsData.map((row) => (
              <TableRow key={row.name}>
                <StyledTableCell align="center">
                  <button className=" ml-auto text-gray-300 p-1 rounded-full hover:bg-gray-300/20 hover:text-gray-700 transition duration-300 mt-auto md:mt-0">
                    <DeleteOutlined fontSize="small" />
                  </button>
                </StyledTableCell>
                <StyledTableCell>
                  <img alt={row.name} src={row.src} width={70} height={70} />
                </StyledTableCell>
                <StyledTableCell>
                  {/* TODO:change link path to product name */}
                  <Link
                    to={"/product/kryo-x26-mtb-model-x"}
                    className="font-semibold text-global-color-0 hover:text-global-color-1 transition duration-300"
                  >
                    {row.name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell>${row.cost}</StyledTableCell>
                <StyledTableCell>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="1"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    value={row.quantity}
                    className="text-center w-14 border h-8"
                    onChange={handleOnChange}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  ${Number(row.cost) * Number(row.quantity)}
                </StyledTableCell>
              </TableRow>
            ))}
            <TableRow>
              <StyledTableCell colSpan={6}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="!w-56 h-9 font-semibold !border-[#ddd]  text-global-color-3 placeholder:text-global-color-3  "
                    />
                    <button className="btn w-full h-12">Apply Coupon</button>
                  </div>
                  <button className="btn h-10" disabled>
                    Update Cart
                  </button>
                </div>
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className="__container">
      <div className="text-black bg-global-color-5 my-4 md:my-12 lg:my-20 p-5 md:px-20 ">
        <h3 className="capitalize mb-5">Cart</h3>
        {cartItemsData.length ? (
          <CartTable />
        ) : (
          <div className="space-y-5 text-center">
            <p>Cart is empty.</p>
            <p>
              <AddShoppingCart fontSize="large" />
            </p>
            <button className="btn">RETURN TO SHOP</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
