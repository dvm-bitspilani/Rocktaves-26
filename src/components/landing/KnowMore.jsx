import React from "react";
import AboutUs from "../../components/landing/AboutUs";
import ContactUs from "../../components/landing/ContactUs";
import styles from "../../styles/landing/KnowMore.module.css";
import KnowMoreBg from "../../assets/images/knowmore/KnowMoreBg.svg";
import FooterStrip from "../../assets/images/knowmore/footerStrip.svg";
const KnowMore = () => {
  return (
    <div className={styles.KnowMoreWrapper} style={{backgroundImage:`url(${KnowMoreBg})`}}> 
      <AboutUs />
      <ContactUs />
      <img src={FooterStrip} alt="FooterStrip" className={styles.FooterStrip} /> 
    </div>
  );
};
export default KnowMore;