import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiStarOutline } from "@mdi/js";

import "./style.css";

const ProductCard = ({
  productType,
  name,
  src,
  price,
  alt,
  srcSet,
  prices,
}) => {
  const [isActive, setActive] = useState("");
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const regex = new RegExp("^[a-zA-Z0-9]*$");
    const formatString = name
      .split(" ")
      .filter((item) => item.match(regex))
      .join("-")
      .toLowerCase();

    setProductName(formatString);
  }, [name]);

  return (
    <div className=" w-fit h-full flex flex-col">
      <div className="relative mb-3">
        <Link to={`/product/${productName}`} className="product-image">
          <img
            src={src}
            srcSet={srcSet}
            sizes="(max-width: 800px) 100px, 800px"
            alt={alt}
            width={800}
            height={800}
          />
        </Link>
        <a
          href="/add-to-cart"
          className="cart "
          title="add to cart"
          data-quantity={1}
        >
          <Icon path={mdiCart} size={0.8} />
        </a>
      </div>

      <span className="text-sm text-global-color-3">{productType}</span>
      <h5 className="text-global-color-2 ">{name}</h5>

      <div className=" mt-auto">
        <div className="flex -space-x-[3px] text-global-color-7" aria-hidden>
          <Icon path={mdiStarOutline} size={0.8} />
          <Icon path={mdiStarOutline} size={0.8} />
          <Icon path={mdiStarOutline} size={0.8} />
          <Icon path={mdiStarOutline} size={0.8} />
          <Icon path={mdiStarOutline} size={0.8} />
        </div>

        {productType === "Bicycles" ? (
          <span className="font-extrabold text-global-color-3 py-2 ">
            ${price}
          </span>
        ) : productType === "Accessories" ? (
          <>
            {isActive.length < 1 ? (
              <span className="font-extrabold text-global-color-3 py-2 ">
                ${Math.min(...prices.map((item) => item.cost))} - $
                {Math.max(...prices.map((item) => item.cost))}
              </span>
            ) : (
              <span className="font-extrabold text-global-color-3 py-2">
                $
                {prices.map((item, index) =>
                  index === isActive ? item.cost : null
                )}
              </span>
            )}
            <ul className="accessory-size">
              {prices.map((item, index) => {
                return (
                  <li
                    key={index}
                    role="button"
                    className={isActive === index ? "active" : ""}
                    onClick={() => setActive(index)}
                  >
                    {item.size}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          "N/A"
        )}
      </div>
    </div>
  );
};

export default ProductCard;
