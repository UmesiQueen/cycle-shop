import React from "react";
import { Link } from "react-router-dom";
import {
  useMediaQuery,
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

const styleTableCell = {
  border: 0,
  borderBottom: "1px #ddd solid",
  width: "50%",
  padding: "10px",
};

const Cart = () => {
  const { cartItemsData, cartTotal, setCartItems } =
    React.useContext(CartItemsContext);
  const matches = useMediaQuery("(min-width:768px)");

  const CartTable = () => {
    const Input = ({ quantity }) => {
      const [quantity_, setQuantity] = React.useState(quantity);

      const handleOnChange = (event) => {
        const { value } = event.target;
        const parentId = Number(
          event.target.parentElement.parentElement.attributes.id.value
        );

        setQuantity(value);

        setCartItems((prev) => {
          const res = prev.findIndex(
            (item) => Number(item.orderId) === parentId
          );
          prev[res].quantity = Number(value);
          return [...prev];
        });
      };

      return (
        <input
          type="number"
          name="quantity"
          placeholder="1"
          min="1"
          step="1"
          inputMode="numeric"
          value={quantity_}
          className="text-center w-14 border h-8"
          onChange={handleOnChange}
        />
      );
    };

    const handleDelete = (orderId) => {
      setCartItems((prev) => prev.filter((item) => item.orderId !== orderId));
    };

    return (
      <>
        {matches ? (
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
                {cartItemsData.map((row, index) => {
                  return (
                    <TableRow key={index} id={row?.orderId}>
                      <StyledTableCell align="center">
                        <button
                          className=" ml-auto text-gray-300 p-1 rounded-full hover:bg-gray-300/20 hover:text-gray-700 transition duration-300 mt-auto md:mt-0"
                          type="button"
                          onClick={() => {
                            handleDelete(row?.orderId);
                          }}
                        >
                          <DeleteOutlined fontSize="small" />
                        </button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <img
                          alt={row?.name}
                          src={row?.src}
                          width={70}
                          height={70}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <Link
                          to={row?.slug}
                          className="font-semibold text-global-color-0 hover:text-global-color-1 transition duration-300"
                        >
                          {row?.name}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell>${row?.cost}</StyledTableCell>
                      <StyledTableCell>
                        <Input quantity={row?.quantity} />
                      </StyledTableCell>
                      <StyledTableCell>
                        ${Number(row?.cost) * Number(row?.quantity)}
                      </StyledTableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <StyledTableCell colSpan={6}>
                    <form className="flex justify-between items-center">
                      <div className="flex gap-3 items-center">
                        <input
                          type="text"
                          placeholder="Coupon Code"
                          className="!w-56 h-9 font-semibold !border-[#ddd]  text-global-color-3 placeholder:text-global-color-3  "
                        />
                        <button className="btn w-full h-12">
                          Apply Coupon
                        </button>
                      </div>
                      <button className="btn h-10" disabled>
                        Update Cart
                      </button>
                    </form>
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <>
            {cartItemsData.map((row, index) => {
              return (
                <div key={index} className="mb-5 shadow-md">
                  <ul className="[&>*]:flex [&>*]:justify-between [&>*]:gap-x-2  [&>*]:p-2 [&>*:not(:last-of-type)]:border-b [&>*]:border-[#ddd] [&>*>p:first-of-type]:text-[#4b4f58] [&>*>p:first-of-type]:font-semibold border border-[#ddd] ">
                    <li>
                      <button
                        className=" ml-auto text-gray-300 p-1 px-2 rounded-full hover:bg-gray-300/20 hover:text-gray-700 transition duration-300"
                        type="button"
                        onClick={() => {
                          handleDelete(row?.productId);
                        }}
                      >
                        <DeleteOutlined fontSize="small" />
                      </button>
                    </li>
                    <li>
                      <img
                        alt={row?.name}
                        src={row?.src}
                        width={70}
                        height={70}
                        className="mx-auto"
                      />
                    </li>
                    <li>
                      <p>Product:</p>
                      <Link
                        to={row?.slug}
                        className="font-semibold text-global-color-0 hover:text-global-color-1 transition duration-300"
                      >
                        {row?.name}
                      </Link>
                    </li>
                    <li>
                      <p>Price:</p>
                      <p>${row?.cost}</p>
                    </li>
                    <li>
                      <p>Quantity:</p>
                      <Input quantity={row?.quantity} />
                    </li>
                    <li>
                      <p>Subtotal:</p>
                      <p> ${Number(row?.cost) * Number(row?.quantity)}</p>
                    </li>
                  </ul>
                </div>
              );
            })}

            <form className=" flex flex-col gap-3 border border-[#ddd] p-2">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="max-w-[14rem] h-9 font-semibold !border-[#ddd]  text-global-color-3 placeholder:text-global-color-3  "
                />
                <button className="btn max-w-[14rem]">Apply Coupon</button>
              </div>
              <button className="btn max-w-[14rem] ml-auto" disabled>
                Update Cart
              </button>
            </form>
          </>
        )}

        {/* cart total */}
        <div className="flex mt-7 mb-5">
          <div className=" w-96 ml-auto  border border-['#ddd']">
            <h4 className="px-4 py-2 bg-global-color-4">Cart totals</h4>
            <hr />
            <div className="p-4">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={styleTableCell}>Subtotal</TableCell>
                    <TableCell sx={styleTableCell}>${cartTotal}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={styleTableCell}>Total</TableCell>
                    <TableCell sx={styleTableCell}>${cartTotal}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <button className="btn mt-4 w-full">Proceed to checkout</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="__container bg-white  md:bg-global-color-4">
      <div className="text-black bg-global-color-5 my-4 md:my-12 lg:my-20 md:p-5 lg:px-20 ">
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
