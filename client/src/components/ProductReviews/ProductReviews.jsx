import React from "react";
import styles from "./ProductReviews.module.css";
import ProductReviewsCard from "./ProductReviewsCard/ProductReviewsCard";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className={styles.productReviews}>
      {productReviews.map((item, index) => (
        <ProductReviewsCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
