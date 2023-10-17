import React from "react";
import { Helmet } from "react-helmet-async";
import Icon from "@mdi/react";
import { mdiBullseye } from "@mdi/js";

import "./style.css";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData } from "../../assets/data/products";
import Extras from "../../components/Extras/Extras";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Cycle Shop</title>
        <meta
          name="description"
          content="Newly Launched Kryo X26 MTB Specifications: Lightweight 18″ Frame Steel Suspension Fork Steel Hardtail Frame Buy Now New Arrivales Discover The Collection Mountain Bikes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Officia deserunt mollit Excepteur sint occaecat Sunt in culpa qui Officia deserunt mollit Excepteur … Home Read More »"
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

      <div id="home">
        <section id="landing" className="background-image">
          <div className="__container __image-overlay">
            <div className=" lg:w-2/3 space-y-3 font-medium">
              <h3>Newly Launched</h3>
              <h1>
                Kryo X26 <br /> MTB
              </h1>
              <div>
                <h4 className="mb-2">Specifications:</h4>
                <ul>
                  <ListItem title='Lightweight 18" Frame' color="primary" />
                  <ListItem title="Steel Suspension Fork" color="primary" />
                  <ListItem title="Steel HardTail Frame" color="primary" />
                </ul>
              </div>
              <div className="pt-4 md:pt-7">
                <Button title="Buy Now" />
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section id="new-arrivals" className="products">
          <div className="__container">
            <div className="p-3 md:p-0 ">
              <h2 className="text-black text-center mb-14">New Arrivals</h2>
              <ul className="__grid-container">
                {productData
                  .filter((item) => item.productType === "Bicycles")
                  .slice(0, 4)
                  .map((item) => (
                    <li
                      key={item.productId}
                      className={`__grid-item col-${item.productId}`}
                    >
                      <ProductCard {...item} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Discover the Collection Section */}
        <section id="discover-collection">
          <div className="mountain-bikes background-image ">
            <DiscoverContainer title="Mountain Bikes" />
          </div>
          <div className="city-bikes  background-image">
            <DiscoverContainer title="City Bikes" />
          </div>
          <div className="specialty-bikes background-image">
            <DiscoverContainer title="Specialty Bikes" />
          </div>
        </section>

        {/* Why Choose KRYO? */}
        <section id="whyKyro">
          <div className="__container">
            <div>
              <h2 className="text-black text-center mb-14">Why Choose KRYO?</h2>
              <ul className="__grid-container">
                <li className="__grid-item col-1">
                  <div className="background-overlay">
                    <h3>Light Weight</h3>
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                    </p>
                  </div>
                </li>
                <li className="__grid-item col-2">
                  <div className="background-overlay">
                    <h3>Lifetime Warranty</h3>
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                    </p>
                  </div>
                </li>
                <li className="__grid-item col-3">
                  <div className="background-overlay">
                    <h4>Biggest Service Network</h4>
                  </div>
                </li>
                <li className="__grid-item col-4">
                  <div className="background-overlay">
                    <h4>99% Assembled Delivery</h4>
                  </div>
                </li>
                <li className="__grid-item col-5">
                  <div className="background-overlay">
                    <h4>Free First Bike Service</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Explore Accessories */}
        <section id="accessories" className="products">
          <div className="__container">
            <div className="p-3 md:p-0 ">
              <h2 className="text-black text-center mb-14">
                Explore Accessories
              </h2>
              <ul className="__grid-container">
                {productData
                  .filter((item) => item.productType === "Accessories")
                  .slice(0, 4)
                  .map((item) => (
                    <li
                      key={item.productId}
                      className={`__grid-item col-${item.productId}`}
                    >
                      <ProductCard {...item} />
                    </li>
                  ))}
              </ul>
              <div className=" mt-10 text-center ">
                <Button title="View All" />
              </div>
            </div>
          </div>
        </section>

        <Extras />
      </div>
    </>
  );
};

export default Home;

const ListItem = ({ title, color }) => {
  return (
    <li className="flex items-center space-x-4">
      <span aria-hidden="true">
        <Icon
          path={mdiBullseye}
          size={0.7}
          color={color === "primary" ? "white" : "red"}
        />
      </span>
      <span>{title}</span>
    </li>
  );
};

const DiscoverContainer = ({ title }) => {
  return (
    <div className="__container background-overlay">
      <div className="space-y-3 px-3 md:px-0 py-16 lg:py-0 xl:w-[65%] ">
        <h4 className="text-xl lg:text-2xl">Discover the Collection</h4>
        <h3 className="text-2xl lg:text-5xl ">{title}</h3>
        <p className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-1 pt-5">
          <ul className="flex flex-col gap-y-1 font-semibold">
            <ListItem title="Officia deserunt mollit" />
            <ListItem title="Excepteur sint occaecatit" />
            <ListItem title="Sunt in culpa qui" />
          </ul>
          <ul className="flex flex-col gap-y-1 font-semibold">
            <ListItem title="Officia deserunt mollit" />
            <ListItem title="Excepteur sint occaecatit" />
            <ListItem title="Sunt in culpa qui" />
          </ul>
        </div>
        <div className="pt-5">
          <Button title="Explore now" />
        </div>
      </div>
    </div>
  );
};
