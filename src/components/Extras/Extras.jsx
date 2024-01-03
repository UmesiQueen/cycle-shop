import React from "react";
import Icon from "@mdi/react";
import { mdiPlayCircleOutline } from "@mdi/js";

import "./style.css";

const Extras = () => {
  return (
    <>
      {/* Programme */}
      <section id="programme">
        <div className="__container">
          <div className="px-[5%] ">
            <h2 className="text-black text-center mb-14">
              Join #GoEcoBiking Programme
            </h2>
            <div className="background-image">
              <div className="background-overlay p-10  md:p-16 flex flex-col justify-end">
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
            <div className="flex flex-col items-center text-center text-black mt-12 md:flex-row md:justify-between md:text-left">
              <div className=" md:w-1/2 p-3">
                <h3 className="leading-none mb-3">
                  Duis aute irure dolor in reprehenderit velit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
              <div>
                <button className="btn">JOIN THE PROGRAMME</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The All New */}
      <section id="all-new" className="background-image">
        <div className=" __container background-overlay">
          <div className="text-center space-y-4 px-4 md:px-14 py-10 md:py-0">
            <h3>The All New</h3>
            <h2>Kryo X26 MTB Is Here</h2>
            <p className="font-medium">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo.
            </p>
            <div className="pt-4">
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Extras;
