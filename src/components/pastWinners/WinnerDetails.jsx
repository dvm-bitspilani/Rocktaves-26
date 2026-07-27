import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pastWinners/WinnerDetails.module.css";
import WinnerDetailsBg from "../../assets/images/pastWinners/WinnerDetailsBg.png";
import BackArrow from "../../assets/images/pastWinners/BackArrow.png";
const WinnerDetails = ({ data }) => {
  const navigate = useNavigate();
  if (!data) return null;
  return (
    <div
      className={styles.WinnerDetailsWrapper}
      style={{
        backgroundImage: `url(${WinnerDetailsBg})`,
      }}
    >
      <button
        className={styles.BackButton}
        onClick={() => navigate("/")}
      >
        <img
          src={BackArrow}
          alt="Back"
        />
      </button>

      <div className={styles.WinnerDetailsContentWrapper}>
        <div className={styles.WinnerDetailsLeftSection}>
          <img
            src={data.BandNameTitle}
            alt="BandTitle"
            className={styles.BandName}
          />

          <img     src={data.DecadeTitle} alt="DecadeTitle" className={styles.DecadeTitle}>
          </img>

          <p className={styles.Description}>
            {data.description}
          </p>
        </div>
        <div className={styles.WinnerDetailsRightSection}>
          <img
            src={data.albumStack}
            alt="albumstack"
            className={styles.AlbumStack}
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerDetails;