import React from 'react'
import styles from './HotItemCard.module.css'

const HotItemCard = ({index, name, price, image}) => {
  return (
    <div className={styles.hotItemCard}>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard