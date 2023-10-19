import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          A product description is a form of marketing copy used to describe and
          explain the benefits of your product. In other words, it provides all
          the information and details of your product on your ecommerce site.
          These product details can be one sentence, a short paragraph or
          bulleted. They can be serious, funny or quirky. They can be located
          right next to or underneath product titles and product images. They
          can be scannable selling points or have strong readability.
        </p>
        <p>
          There’s no doubt product descriptions can help take your business to
          the next level, but what should they say? How long should they be?
          Which format is best? How do you make the products rank high for
          Search Engine Optimization (SEO)?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
