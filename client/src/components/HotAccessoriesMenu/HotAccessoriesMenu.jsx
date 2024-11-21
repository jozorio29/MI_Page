import React from "react";
import styles from "./HotAccessoriesMenu.module.css";
import { Link } from "react-router-dom";

const HotAccessoriesMenu = () => {
  return (
    <div className={styles.hotAccessoriesMenu}>
      <Link className={styles.hotAccessoriesLink} to="/music">
        Music Store
      </Link>
      <Link className={styles.hotAccessoriesLink} to="/smartDevice">
        Smart Devices
      </Link>
      <Link className={styles.hotAccessoriesLink} to="/home">
        Home
      </Link>
      <Link className={styles.hotAccessoriesLink} to="/lifeStyle">
        LifeStyle
      </Link>
      <Link className={styles.hotAccessoriesLink} to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
