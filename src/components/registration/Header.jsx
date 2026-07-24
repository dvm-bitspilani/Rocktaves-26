import React from "react";
import styles from "../../styles/registration/Header.module.css";
import RegisterTitle from "../../assets/images/register/RegisterTitle.svg";
function Header() {
  return (
  <div className={styles.HeaderWrapper}>
    <img src={RegisterTitle} alt="RegistrTitle" className={styles.RegisterTitle} />
  </div>
  );
}

export default Header;