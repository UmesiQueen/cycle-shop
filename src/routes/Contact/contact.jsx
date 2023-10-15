import React from "react";
import { Helmet } from "react-helmet-async";
import StoreIcon from "@mui/icons-material/Store";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import "./style.css";
import Button from "../../components/Button/Button";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Cycle Shop</title>
        <meta
          property="og:description"
          content="Who We Are Watch The Movie Explore The Stories Get on &amp; Go! 2002 First Garage &amp; Shop 2004 First Cycle Launched 2005 First #GoEcoBiking Event 2005 100+ Service Networks 2008 50+ Models &amp; Accessories Today Our Process 01. Research Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper. … About Us Read More »"
        />
        <meta
          name="keywords"
          content="bicycle, bikes, mountain bike, bike programme "
        />
        <style type="text/css">
          {`
          header {
           background-color : transparent; 
           position: absolute;
           top : 0;
           left: 0;
           right: 0;
          }
       `}
        </style>
      </Helmet>
      <div>
        <section className="contact-landing">
          <div className="background-overlay flex justify-center items-center">
            <h1 className="-mb-6">Contact Us</h1>
          </div>
        </section>

        {/* Google Map */}
        <section></section>

        {/* Phone Info */}
        <section className="contact-info __container">
          <div className="h-full">
            <ul className=" grid gap-y-5 md:grid-cols-3 text-center">
              <li>
                <span className="icons">
                  <LocalShippingIcon />
                </span>
                <h4>1 800 755 60 21</h4>
                <p>Sales Related Enquiries</p>
              </li>
              <li>
                <span className="icons">
                  <HomeRepairServiceIcon />
                </span>
                <h4>1 800 755 60 23</h4>
                <p>Service Related Enquiries</p>
              </li>
              <li>
                <span className="icons">
                  <StoreIcon />
                </span>
                <h4>1 800 755 60 23</h4>
                <p>Dealership Related Enquiries</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Details */}
        <section className="contact-details">
          <div className="__container">
            <div className="contact-container">
              <div>
                <form className="flex flex-col gap-y-4">
                  <h3>Let's Get in Touch</h3>
                  <div className=" flex justify-between gap-x-4">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <input type="text" placeholder="Enter email address" />
                  <textarea placeholder="Enter your message" rows={6} />
                  <div className="pb-6">
                    <Button title="Send Message" />
                  </div>
                </form>
              </div>
              <div>
                <h3>Contact Details</h3>
                <ul>
                  <li>
                    <h4>Our Hours</h4>
                    <p>10:00 AM – 22.00 PM</p>
                    <p>Monday – Friday</p>
                  </li>
                  <li>
                    <h4>Location</h4>
                    <p>212 7th St SE, Washington, DC 20003, USA</p>
                  </li>
                  <li>
                    <h4>Contact Us</h4>
                    <p>Phone: 1 800 755 60 20</p>
                    <p>Email: contact@company.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
