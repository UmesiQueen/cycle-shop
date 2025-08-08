import "./style.css";

const ProductCardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="image-placeholder"></div>
      <div className="content">
        <div className="category"></div>
        <div className="title"></div>
        <div className="rating"></div>
        <div className="price"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
