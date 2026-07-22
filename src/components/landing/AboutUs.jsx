import React from "react";
import styles from "../../styles/landing/AboutUs.module.css";
import AboutUsTitle from "../../assets/images/aboutus/AboutUsTitle.svg";
const AboutUs = () => {
  return (
    <div>
    <img src={AboutUsTitle} alt="AboutUsTitle" className={styles.AboutUsTitle}/>
      
      <div className={styles.AboutUsText}><p>
        Roctaves is organised by the Association of Rock, BITS Pilani (ARBITS).
        ARBITS began as a club with the initial goal of curating and spreading
        indie music on campus, and our goal has been to foster and uplift the
        Indian music scene and help bands reach a wider audience. For decades,
        the club has organised Rocktaves, which has acted as a launching pad for
        budding artists, with prior winners receiving cash prizes of over one
        lakh, distribution deals and more.
      </p>
      </div>
    </div>
  );
};

export default AboutUs;
