import React from "react";
import styles from "../../styles/registration/Header.module.css"
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.rock}>ROCK</span>
        <span className={styles.taves}>TAVES</span>
      </div>

      <a href="/" className={styles.back}>
        &larr; BACK TO HOME
      </a>
    </header>
  );
}

export default Header;