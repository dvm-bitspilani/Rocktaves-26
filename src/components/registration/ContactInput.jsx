import React from "react";
import styles from "../../styles/registration/ContactInput.module.css";
const ContactInput = ({
  contactNum,
  nameField,
  phoneField,
  optional = false,
}) => {
  return (
    <div>
      <label className={styles.ContactLabel}>
        Contact {contactNum} {optional && "(Optional)"}
      </label>

      <div>
        <input
          name={nameField.name}
          placeholder={nameField.placeholder}
          type={nameField.type}
          maxLength={nameField.maxLength}
          className={styles.ContactInputBox}
        />

        <input
          name={phoneField.name}
          placeholder={phoneField.placeholder}
          type={phoneField.type}
          maxLength={phoneField.maxLength}
          className={styles.ContactInputBox}
        />
      </div>
    </div>
  );
};

export default ContactInput;