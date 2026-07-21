import React from "react";
import styles from "../../styles/registration/BandInput.module.css";
const BandInput = ({ name, placeholder, type, maxLength }) => {
  return (
    <div >
      <input className={styles.BandInputBox}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default BandInput;