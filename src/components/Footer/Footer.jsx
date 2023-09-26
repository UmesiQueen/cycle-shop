import React from "react";

import "./style.css";
import { Logo } from "../../assets/icons/index";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer>
      <section className="__container">
        <div className="links">
          <div>
            <img
              src={Logo}
              srcSet=""
              className="mx-auto md:mx-0"
              alt="cycle shop"
              width={80}
              height={48}
            />
          </div>

          <div>
            <h4 className="mb-5">UseFull Links</h4>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5">Our Collection</h4>
            <ul>
              <li>Mountain Bikes</li>
              <li>City Bikes</li>
              <li>Specialty Bikes</li>
              <li>Electric Bikes</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5">Account</h4>
            <ul>
              <li>Customer Login</li>
              <li>Dealer Login</li>
              <li>Addresses</li>
              <li>Payment Method</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-5 border-t border-t-[rgba(255,255,255,0.11)]">
        <div className="__container">
          <span>
            Copyright &copy; 2023<a href="https://wpastra.com/"> Cycle Shop </a>
          </span>
          <ul className="socials">
            <li>
              <FacebookRoundedIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
