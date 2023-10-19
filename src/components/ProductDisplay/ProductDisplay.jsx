import React from "react";
import "./ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
const ProductDisplay = ({ product }) => {
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          A product description is a form of marketing copy used to describe and
          explain the benefits of your product. In other words, it provides all
          the information and details of your product on your ecommerce site.
          These product details can be one sentence, a short paragraph or
          bulleted. They can be serious, funny or quirky. They can be located
          right next to or underneath product titles and product images. They
          can be scannable selling points or have strong readability. There are
          multiple styles and ways to make product descriptions work for your
          ecommerce store, but there’s much more to them than simple
          copywriting.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-size-right">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="product-display-right-category">
          <span>Category :</span>Women , T-Shirt , Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span>Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
