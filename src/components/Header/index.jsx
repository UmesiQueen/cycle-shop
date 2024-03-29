import { useState, useRef, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Turn as Hamburger } from "hamburger-react";
import classNames from "classnames";

import "./style.css";
import { Logo } from "../../assets/icons/index";
import { CartItemsContext } from "../../hooks/CartContext";
import { GlobalContext } from "../../hooks/AppContext";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#fff",
      dark: "#002884",
      contrastText: "#000",
    },
  },
});

// active link function
const active = ({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "active" : "";

const Header = () => {
  const menuRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const { cartTotal, cartItems } = useContext(CartItemsContext);
  const { setDrawerState } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const filteredCartItems = [
    ...new Set([...cartItems.map((cartItem) => cartItem.productId)]),
  ];

  return (
    <header>
      <div className="relative z-[1] flex justify-between items-center min-h-[80px] px-[15px] md:px-[50px] lg:px-20 ">
        <Link to="/">
          <img src={Logo} srcSet="" alt="cycle shop" width={80} height={48} />
        </Link>

        {/* MENU LINKS */}
        <nav>
          <ul
            ref={menuRef}
            className={classNames(
              "uppercase font-semibold md:flex md:gap-x-3 lg:gap-x-5 gap-y-5",
              !isOpen && window.innerWidth <= 768 ? "hidden" : ""
            )}
          >
            {[
              ["Home", "/"],
              ["Bicycles", "product-category/bicycles"],
              ["Accessories", "product-category/accessories"],
              ["About Us", "about"],
              ["Contact", "contact"],
            ].map(([title, url], index) => (
              <li key={index}>
                <NavLink
                  to={url}
                  className={`hover:text-global-color-7 ${active}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-1 md:w-36 justify-end cursor-pointer">
          <div
            onClick={() =>
              setDrawerState(pathname.includes("/cart") ? false : true)
            }
            className="space-x-1"
          >
            <span className=" cart-total font-black ">${cartTotal}</span>
            <ThemeProvider theme={theme}>
              <IconButton aria-label="cart" color="primary">
                <Badge
                  badgeContent={filteredCartItems.length}
                  color="primary"
                  showZero
                >
                  <ShoppingCartIcon color="primary" />
                </Badge>
              </IconButton>
            </ThemeProvider>
          </div>
          <div className="md:hidden">
            <Hamburger
              label="Show menu"
              toggled={isOpen}
              toggle={setOpen}
              rounded
              duration={0.8}
              size={24}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
