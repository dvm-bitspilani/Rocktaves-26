import React from "react";
import styles from "../../styles/landing/ContactUs.module.css";
import ContactUsTitle from "../../assets/images/contactus/ContactUsTitle.svg";
const ContactUs = () => {
  return (
    <div>
       <img src={ContactUsTitle} alt="ContactUsTitle" className={styles.ContactUsTitle}/>
      <div className={styles.ContactUsText}>
      <div className={styles.ContactUs_1}>
        <span>Tanvi Gangakhedkar</span>
        <span>+91 9967851131</span>
      </div>
      <div className={styles.ContactUs_1}>
        <span>Ansh Achal Gupta</span>
        <span>+919669190002</span>
      </div>
    </div></div>
  );
};

export default ContactUs;
