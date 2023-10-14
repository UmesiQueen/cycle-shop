import React from "react";
import { Helmet } from "react-helmet-async";
import Icon from "@mdi/react";
import { mdiPlayCircleOutline } from "@mdi/js";

import "./style.css";
import Extras from "../../components/Extras/Extras";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Cycle Shop</title>
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

      <div id="about">
        <section className="about-landing background-image ">
          <div className="background-overlay">
            <div className="__container">
              <div className="px-[5%]">
                <h1 className="text-center mb-14">Who We Are</h1>
                <div className="background-image">
                  <div className="background-overlay p-10 md:p-16 flex flex-col justify-end">
                    <span className="mb-4">
                      <Icon
                        className="-ml-2 w-16 md:w-24 aspect-square"
                        path={mdiPlayCircleOutline}
                        color="white"
                      />
                    </span>
                    <h3>Watch Full Video</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore the stories */}
        <section className="explore-stories my-20 __container">
          <h2 className="text-black text-center mb-14">Explore The Stories</h2>
          <ul className="_grid-container grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-y-5 md:gap-x-5 mt-4">
            <li className="background-image __grid-item col-1 ">
              <div className="background-overlay">
                <div className=" h-full p-5 md:p-9 flex flex-col justify-end">
                  <h3>Get on & Go!</h3>
                  <h4 className="text-global-color-0 ">2002</h4>
                </div>
              </div>
            </li>
            <li className="background-image __grid-item col-2 row-start-2">
              <div className="background-overlay">
                <div className=" h-full p-5 md:p-9 flex flex-col justify-end">
                  <h3>First Garage & Shop</h3>
                  <h4 className="text-global-color-0 ">2004</h4>
                </div>
              </div>
            </li>
            <li className="background-image __grid-item col-3 row-span-2 col-span-2">
              <div className="background-overlay">
                <div className=" h-full p-5 md:p-9 flex flex-col justify-end">
                  <h3>First Cycle Launched</h3>
                  <h4 className="text-global-color-0 ">2005</h4>
                </div>
              </div>
            </li>
          </ul>
          <ul className="_grid-container grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-y-5 md:gap-x-5 md:mt-4">
            <li className="background-image __grid-item col-4 md:row-span-2 col-span-2">
              <div className="background-overlay">
                <div className=" h-full p-5 md:p-9 flex flex-col justify-end">
                  <h3>First #GoEcoBiking Event</h3>
                  <h4 className="text-global-color-0 ">2005</h4>
                </div>
              </div>
            </li>
            <li className="background-image __grid-item col-5 md:col-start-3 row-start-1">
              <div className="background-overlay">
                <div className=" h-full p-5 md:p-9 flex flex-col justify-end">
                  <h3>100+ Service Networks</h3>
                  <h4 className="text-global-color-0 ">2008</h4>
                </div>
              </div>
            </li>
            <li className="background-image __grid-item col-6 ">
              <div className="background-overlay">
                <div className=" h-full p-5 md:p-9 flex flex-col justify-end">
                  <h3>50+ Models & Accessories</h3>
                  <h4 className="text-global-color-0 ">Today</h4>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Our Process */}
        <section className="my-20  __container">
          <h2 className="text-black text-center mb-14">Our Process</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
            <li className="text-black px-3 ">
              <h4 className="text-global-color-0">01.</h4>
              <h4>Research</h4>
              <p>
                Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
                luctus nec ullam corper.
              </p>
            </li>
            <li className="text-black px-3 ">
              <h4 className="text-global-color-0">02.</h4>
              <h4>Idea & Concept</h4>
              <p>
                Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
                luctus nec ullam corper.
              </p>
            </li>
            <li className="text-black px-3  ">
              <h4 className="text-global-color-0">03.</h4>
              <h4>Design & Production​</h4>
              <p>
                Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
                luctus nec ullam corper.
              </p>
            </li>
            <li className="text-black px-3  ">
              <h4 className="text-global-color-0">04.</h4>
              <h4>Sales & Service​</h4>
              <p>
                Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
                luctus nec ullam corper.
              </p>
            </li>
          </ol>
        </section>
        <Extras />
      </div>
    </>
  );
};

export default About;
