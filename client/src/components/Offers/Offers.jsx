import React from 'react'
import styles from './Offers.module.css'
import Offer from '../Offer/Offer'

const Offers = ({offer}) => {
  return (
    <div className={styles.offers}>
        {offer.map((item, index) => (
         <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
        
    </div>
  )
}

export default Offers