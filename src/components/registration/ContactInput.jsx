import React from "react";
import styles from "../../styles/registration/ContactInput.module.css";
const ContactInput = ({
  contactNum,
  nameField,
  phoneField,
  optional = false,
}) => {
  return (
    <div className={styles.ContactInputWrapper}>
      <p className={styles.ContactHeading}>
        CONTACT {contactNum}: {optional && "(Optional)"}
      </p>

      <div className={styles.ContactInputBoxRow}>
        <input
          name={nameField.name}
          placeholder={nameField.placeholder}
          type={nameField.type}
          maxLength={nameField.maxLength}
          className={styles.ContactInputBox1}
        />

        <input
          name={phoneField.name}
          placeholder={phoneField.placeholder}
          type={phoneField.type}
          maxLength={phoneField.maxLength}
          className={styles.ContactInputBox2}
        />
      </div>
    </div>
  );
};

export default ContactInput;