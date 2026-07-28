import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/landing/Home.module.css";

import heroBg from "../../assets/images/home/heroBg.webp";
import heroLogo from "../../assets/images/home/heroLogo.webp";
import RegisterNow from "../../assets/images/home/RegisterNow.webp";
import FooterStrip from "../../assets/images/home/FooterStrip.webp";
import ScrollDown from "../../assets/images/home/ScrollDown.webp";

import Preloader from "../../components/preloader/Preloader";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <Preloader
        onFinish={() => navigate("/register")}
      />
    );
  }

  return (
    <div
      className={styles.HomeWrapper}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <img
        src={heroLogo}
        alt="RocktaveLogo"
        className={styles.RocktaveLogo}
      />

      <img
        src={RegisterNow}
        alt="RegisterNow"
        className={styles.RegisterNow}
        onClick={() => setLoading(true)}
      />

      <img
        src={FooterStrip}
        alt="FooterStrip"
        className={styles.FooterStrip}
      />

      <img
        src={ScrollDown}
        alt="ScrollDown"
        className={styles.ScrollDown}
      />
    </div>
  );
};

export default Home;