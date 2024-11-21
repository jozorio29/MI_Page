import React from "react";
import styles from "./NavCard.module.css";

const NavCard = ({ name, price, image, index }) => {
  return (
    <div className={styles.navCard}>
      <img src={image} alt={`${index} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default NavCard;
