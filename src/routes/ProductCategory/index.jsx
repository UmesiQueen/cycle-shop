import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import "./style.css";
import ProductCard from "../../components/ProductCard/index";
import { GlobalContext } from "../../hooks/AppContext";

const ProductCategory = () => {
  const [data, setData] = React.useState([]);
  const { productType } = useParams();
  const navigate = useNavigate();
  const { productDataQuery } = React.useContext(GlobalContext);
  const productData = productDataQuery.data || [];

  React.useEffect(() => {
    if (!["accessories", "bicycles"].includes(productType)) navigate("/404");
    else
      setTimeout(() => {
        const dataArray = productData.filter(
          (item) => item.productType.toLowerCase() === productType
        );
        console.log(productData);
        setData(dataArray);
      }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productType, productData]);

  return (
    <div className="text-black bg-white md:bg-global-color-4">
      <div className="__container">
        <section className="bg-global-color-5 md:px-10 py-5 my-4 md:my-12 lg:my-20">
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
            <Link to="/">Home</Link>
            <div className="capitalize">{productType}</div>
          </Breadcrumbs>

          <h1 className="capitalize text-global-color-0 mt-5 mb-10">
            {productType}
          </h1>

          <p className="my-5">Showing all {data.length} results</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 md:my-10">
            {data.map((item) => (
              <li key={item.productId}>
                <ProductCard {...item} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProductCategory;
