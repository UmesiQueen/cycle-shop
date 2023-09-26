import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Turn as Hamburger } from "hamburger-react";
import classNames from "classnames";

import "./style.css";
import { Logo } from "../../assets/icons/index";

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

  return (
    <header>
      <div className="relative __container">
        <nav className="flex justify-between items-center min-h-[80px] ">
          <Link to="/">
            <img src={Logo} srcSet="" alt="cycle shop" width={80} height={48} />
          </Link>
          {/* MENU LINKS */}
          <ul
            ref={menuRef}
            className={classNames(
              "uppercase font-semibold md:flex gap-5",
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
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <span className=" cart-total font-black ">$0.00</span>
            <ThemeProvider theme={theme}>
              <IconButton aria-label="cart" color="primary">
                <Badge badgeContent={0} color="primary" showZero>
                  <ShoppingCartIcon color="primary" />
                </Badge>
              </IconButton>
            </ThemeProvider>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
