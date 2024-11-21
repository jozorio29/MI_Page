import React from 'react'
import styles from './Heading.module.css'

const Heading = ({text}) => {
  return (
    <div className={styles.heading}>
        <div></div>
        <p>{text}</p>
        <div></div>
        
    </div>
  )
}

export default Heading