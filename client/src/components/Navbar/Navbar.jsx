import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { logo } from "../Data/data.json";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.logoImage} id="logoImage" src={logo} alt="Not" />
        </Link>
      </div>
      <Link className={styles.navlinks} to="/miphones">
        Mi Phones
      </Link>
      <Link className={styles.navlinks} to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className={styles.navlinks} to="/tv">
        TV
      </Link>
      <Link className={styles.navlinks} to="/laptops">
        Laptops
      </Link>
      <Link className={styles.navlinks} to="/lifestyle">
        Fitness & Lifestyle
      </Link>
      <Link className={styles.navlinks} to="/home">
        Home
      </Link>
      <Link className={styles.navlinks} to="/audio">
        Radio
      </Link>
      <Link className={styles.navlinks} to="/accessories">
        Accessories
      </Link>

      <div className={styles.searchbox}>
        <input type="text" name="search" placeholder="Search Products" />
        <span className="material-symbols-outlined">search</span>
      </div>
    </div>
  );
};

export default Navbar;
