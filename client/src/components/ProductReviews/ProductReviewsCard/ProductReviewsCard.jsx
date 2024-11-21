import React from 'react'
import styles from './ProductReviewsCard.module.css'

const ProductReviewsCard = ({index, name, price, image, review}) => {
  return (
    <div className={styles.productReviewsCard}>
        <img src={image} alt={`${index} review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewsCard