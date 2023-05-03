import React from "react";
import styles from "../styles/navbar.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <img src="/Amazon_logo.png" alt="amazon_logo" />
      </div>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Search..." />
        <div className={styles.dropDown}>
          <div>All Categories</div>
          <RiArrowDropDownLine color="#000" />
        </div>
        <div className={styles.searchIcon}>
          <BsSearch color="#fff" />
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <AiOutlineHeart color="#000" />
        </div>
        <div className={styles.icon}>
          <AiOutlineShoppingCart color="#000" />
        </div>
        <div className={styles.icon}>
          <AiOutlineBell color="#000" />
        </div>
        <div className={styles.profile}></div>
      </div>
    </nav>
  );
};

export default Navbar;
