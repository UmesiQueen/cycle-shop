import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import "./style.css";
import { productData } from "../../assets/data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductCategory = () => {
  const [data, setData] = useState([]);
  const { productType } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const dataArray = productData.filter(
      (item) => item.productType.toLowerCase() === productType.toLowerCase()
    );

    if (dataArray.length > 0) setData(dataArray);
    else navigate("/404");
  }, [setData, productType, navigate]);

  return (
    <div className="text-black md:bg-global-color-4">
      <div className="__container">
        <section className="bg-global-color-5 md:px-10 py-5 my-10 md:my-20">
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
