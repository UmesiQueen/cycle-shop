import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiStarOutline } from "@mdi/js";
import classNames from "classnames";

import "./style.css";
import { CartItemsContext } from "../../hooks/CartContext";

const ProductCard = ({
  productType,
  productId,
  name,
  src,
  price,
  alt,
  srcSet,
  prices,
}) => {
  const { setNewOrder, addToCart } = useContext(CartItemsContext);
  const [isActive, setActive] = useState(-1);
  const [inActive, setInActive] = useState([]);

  const regex = new RegExp("^[a-zA-Z0-9]*$");
  const productName = name
    .split(" ")
    .filter((item) => item.match(regex))
    .join("-")
    .toLowerCase();

  const handleOnClick = (e) => {
    if (productType === "Accessories") {
      if (isActive < 0) {
        const element = e.currentTarget;
        element.classList.add("shake");
        setInActive([0]);
        const nextInActiveIndex = setInterval(() => {
          element.classList.remove("shake");
          setInActive((prev) => {
            return [...prev, prev.slice(-1)[0] + 1];
          });
        }, 450);

        let delayTime = (prices.length - 1) * 1000;

        setTimeout(() => {
          clearInterval(nextInActiveIndex);
          setInActive([]);
        }, delayTime);

        return false;
      }
    }

    return addToCart();
  };

  let defaultOrderState = {
    productId,
    type: productType,
    quantity: 1,
    cost: price,
  };

  const setDefaultOrderState = () => {
    if (productType === "Accessories") {
      if (isActive !== -1) {
        const { cost, size } = prices.filter(
          (_, index) => isActive === index
        )[0];

        return setNewOrder({ ...defaultOrderState, cost, size });
      }
    }
    return setNewOrder(defaultOrderState);
  };

  return (
    <div className=" w-fit h-full flex flex-col">
      <div className="relative mb-3" onMouseEnter={setDefaultOrderState}>
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
        <button className="cart" title="add to cart" onClick={handleOnClick}>
          <Icon path={mdiCart} size={0.8} />
        </button>
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
            {isActive < 0 ? (
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
                    className={classNames(
                      isActive === index && "active",
                      inActive.includes(index) ? "inactive" : ""
                    )}
                    onClick={() => {
                      setActive(index);
                    }}
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
