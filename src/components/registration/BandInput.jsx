import React from "react";
import styles from "../../styles/registration/BandInput.module.css";
const BandInput = (props) => {
  return (
    <div className={styles.BandInputWrapper}>
      <h4 className={styles.BandInputBoxHeading}>{props.field.heading}</h4>
      <input className={styles.BandInputBox}
        name={props.field.name}
        type={props.field.type}
        placeholder=''
        maxLength={props.field.maxLength}
      />
    </div>
  );
};

export default BandInput;