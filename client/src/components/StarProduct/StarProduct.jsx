import React from 'react'
import styles from './StarProduct.module.css'

const StarProduct = ({starProduct}) => {
  return (
    <div className={styles.starProduct}>
        <div> <a href={starProduct[0].url}> <img src={starProduct[0].image} alt="1st Product" /></a> </div>
        <div>
        <a href={starProduct[1].url}> <img src={starProduct[1].image} alt="1st Product" /></a>
        <a href={starProduct[2].url}> <img src={starProduct[2].image} alt="1st Product" /></a>
        <a href={starProduct[3].url}> <img src={starProduct[3].image} alt="1st Product" /></a>
        </div>
    </div>
  )
}

export default StarProduct