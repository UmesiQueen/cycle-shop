import { useState, useEffect, useRef, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { productData } from "../../assets/data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CartItemsContext } from "../../hooks/CartContext";
import "./style.css";

let randomText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const StyledTabs = styled((props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return <Tabs orientation={matches ? "vertical" : "horizontal"} {...props} />;
})({
  "& .MuiTabs-indicator": {
    top: "0",
    backgroundColor: "#b62d25",
    height: "4px",
    // width: matches ? "4px" : "fit-content",
    // right: matches ? "unset" : "0",
  },
});

const StyledTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-label={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    sx: {
      fontFamily: "'DM_Sans', sans-serif",
      fontWeight: "600",
      color: "#424242 !important",
    },
    disableRipple: true,
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Product = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const { setCurrentOrder, addToCart } = useContext(CartItemsContext);
  const [product, setProduct] = useState();
  const [tabContent, setTabContent] = useState(0);
  const [isActiveSize, setActiveSize] = useState(null);
  const addToCartBtn = useRef();

  useEffect(() => {
    const regex = new RegExp("^[a-zA-Z0-9]*$");
    const data = productData.filter(
      (item) =>
        item.name
          .split(" ")
          .filter((item) => item.match(regex))
          .join("-")
          .toLowerCase() === productName
    );

    if (data.length > 0) setProduct(data[0]);
    else navigate("/404");

    setCurrentOrder((prev) => ({ ...prev, productId: data[0].productId }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName]);

  const handleTabChange = (event, newValue) => {
    setTabContent(newValue);
  };

  const handleQuantityChange = (event) => {
    const { name, value } = event.currentTarget;
    setCurrentOrder((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleOnSizeClick = (index, size) => {
    setActiveSize(index);
    setCurrentOrder((prev) => ({ ...prev, size }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(addToCartBtn);
    e.currentTarget.reset();
  };

  return (
    <>
      <Helmet>
        <title> {product?.name ?? "Product"} - Cycle Shop</title>
        <meta name="description" content="Insert gibberish here" />
        <meta name="keywords" content="insert, gibberish, here" />
      </Helmet>
      <div className="  md:bg-global-color-4 text-black">
        <div className="__container">
          <section className="bg-global-color-5 md:p-20 my-10 md:my-20">
            <div className="lg:flex gap-x-10 mb-16 ">
              <div className=" relative grow basis-1/2 w-full">
                <img
                  src={product?.src}
                  srcSet={product?.srcSet}
                  sizes="(max-width: 800px) 100px, 800px"
                  alt={product?.name}
                  width={"100%"}
                  height={"100%"}
                />
                <div className="icon-style">
                  <SearchIcon />
                </div>
              </div>
              <div className="mt-10 font-medium grow basis-1/2 flex flex-col gap-y-3">
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <Link to={`/product-category/${product?.productType}`}>
                    {product?.productType}
                  </Link>
                  <div className="capitalize">{product?.name}</div>
                </Breadcrumbs>

                <p className="text-global-color-0 font-semibold">
                  {product?.productType}
                </p>

                <h3>{product?.name}</h3>

                <p>
                  <span className=" font-black text-xl md:text-3xl text-global-color-7">
                    {product?.productType === "Bicycles" ? (
                      `$${product?.price}`
                    ) : product?.productType === "Accessories" ? (
                      <span className="font-extrabold text-global-color-3 py-2 ">
                        ${Math.min(...product?.prices.map((item) => item.cost))}{" "}
                        - $
                        {Math.max(...product?.prices.map((item) => item.cost))}
                      </span>
                    ) : (
                      "N/A"
                    )}
                  </span>{" "}
                  & Free shipping
                </p>
                <p>{product?.description ?? randomText.slice(0, 231)} </p>

                {product?.productType === "Accessories" && (
                  <>
                    <ul className="accessory-size">
                      {product?.prices.map((item, index) => {
                        return (
                          <li
                            key={index}
                            role="button"
                            className={isActiveSize === index ? "active" : ""}
                            onClick={() => {
                              handleOnSizeClick(index, item.size);
                            }}
                          >
                            {item.size}
                          </li>
                        );
                      })}
                    </ul>

                    <span className="font-black text-global-color-3 inline-block py-2">
                      {product?.prices.map(
                        (item, index) =>
                          isActiveSize === index && `$${item.cost}`
                      )}
                    </span>
                  </>
                )}

                <hr />
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className="flex gap-x-5 my-3"
                >
                  <input
                    type="number"
                    name="quantity"
                    placeholder="1"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    className="text-center w-14 border"
                    onChange={handleQuantityChange}
                  />
                  <button
                    className="btn"
                    ref={addToCartBtn}
                    type="submit"
                    disabled={
                      isActiveSize === null &&
                      product?.productType === "Accessories"
                    }
                  >
                    Add to cart
                  </button>
                </form>
                <hr />

                <div className="flex gap-x-4">
                  {product?.productType === "Accessories" && <p>SKU: N/A</p>}
                  <p>
                    Category :{" "}
                    <span className="text-global-color-0">
                      {product?.productType}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Product tabs */}
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider" }}
              >
                <StyledTabs
                  value={tabContent}
                  onChange={handleTabChange}
                  aria-label={"description reviews "}
                >
                  <Tab label="Description" {...a11yProps(0)} />
                  <Tab label="Reviews (0)" {...a11yProps(1)} />
                  {product?.productType === "Accessories" && (
                    <Tab label="Additional Information" {...a11yProps(2)} />
                  )}
                </StyledTabs>
              </Box>
              <StyledTabPanel value={tabContent} index={0}>
                {randomText}
              </StyledTabPanel>
              <StyledTabPanel value={tabContent} index={1}>
                There are no reviews yet.
                <section className="md:border py-5 md:p-10 mt-5">
                  <h3>Be the first to review “{product?.name}”</h3>
                  <p className=" mt-1 mb-5">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form className="flex flex-col gap-y-5">
                    <div>
                      <label className="required">Your Ratings</label>
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>

                    <div>
                      <label htmlFor="review" className="required">
                        Your review
                      </label>
                      <textarea id="review" name="review" rows={3} required />
                    </div>

                    <div className="w-full flex gap-x-5">
                      <div className=" grow basis-1/2">
                        <label htmlFor="name" className="required">
                          Name
                        </label>
                        <input type="text" id="name" name="name" required />
                      </div>

                      <div className=" grow basis-1/2">
                        <label htmlFor="email" className="required">
                          Email
                        </label>
                        <input type="email" id="email" name="email" required />
                      </div>
                    </div>

                    <div className="flex items-center gap-x-2">
                      <input type="checkbox" id="save" />
                      <label htmlFor="save">
                        Save my name, email, and website in this browser htmlFor
                        the next time I comment.
                      </label>
                    </div>
                    <div>
                      <button className="btn">Submit</button>
                    </div>
                  </form>
                </section>
              </StyledTabPanel>
              {product?.productType === "Accessories" && (
                <StyledTabPanel value={tabContent} index={2}>
                  <table>
                    <tbody>
                      <tr>
                        <th>Sizes</th>
                        <td>
                          {product?.prices.map((item, index) => (
                            <li key={index}>{item.size}</li>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </StyledTabPanel>
              )}
            </Box>

            {/* Related products */}
            <div className="mt-10">
              <h3 className="text-3xl  md:text-5xl">Related Products</h3>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
                {productData
                  .filter(
                    (item) =>
                      item.productType === product?.productType &&
                      item.productId !== product?.productId
                  )
                  .slice(0, 3)
                  .map((item) => (
                    <li key={item.productId}>
                      <ProductCard {...item} />
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Product;
