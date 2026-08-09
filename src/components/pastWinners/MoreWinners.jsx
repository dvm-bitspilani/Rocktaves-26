import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/landing/PastWinners.module.css";

import PastWinnersBg from "../../assets/images/pastWinners/PastWinnersBg.png";
import PastWinnersTitle from "../../assets/images/pastWinners/PastWinnersTitle.png";
import PastWinnersCardBg from "../../assets/images/pastWinners/PastWinnersCardBg.png";
import PastWinnersCardBg1 from "../../assets/images/pastWinners/PastWinnersCardBg1.png";
import { pastWinnersData } from "../../data/pastWinnersData.js";

import Preloader from "../../components/preloader/Preloader";

const MoreWinners = ({
  selectedWinner,
  setSelectedWinner,
}) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const openWinner = (winner) => {
    console.log("Clicked winner:", winner);
    console.log("Clicked winner ID:", winner.id);

    // Update parent immediately
    setSelectedWinner(winner);

    // Show preloader
    setLoading(true);
  };

  const handlePreloaderComplete = () => {
    console.log("Preloader finished");
    console.log("Navigating with ID:", selectedWinner?.id);

    if (!selectedWinner) {
      console.error("No winner selected");
      return;
    }

    setLoading(false);

    navigate("/past-winners", {
      state: {
        id: selectedWinner.id,
      },
    });
  };

  if (loading && selectedWinner) {
    return (
      <Preloader
        setIsLoading={handlePreloaderComplete}
      />
    );
  }

  return (
    <div
      className={styles.PastWinnersWrapper}
      style={{
        backgroundImage: `url(${PastWinnersBg})`,
      }}
    >
      <img
        src={PastWinnersTitle}
        alt="Past Winners"
        className={styles.PastWinnersTitle}
      />

      <div className={styles.CardContainer}>
        {pastWinnersData.map((winner,index) => (
          <div
            key={winner.id}
            className={styles.Card}
            style={{
              backgroundImage: index ===1? `url(${PastWinnersCardBg1})`:`url(${PastWinnersCardBg})`,
            }}
            onClick={() => openWinner(winner)}
          >
            <h2 className={styles.CardDecadeTop}>
              {winner.decadetop}
            </h2>

            <div className={styles.AlbumStack}>
              <img
                src={winner.albumStack}
                alt="Album Stack"
              />
            </div>

            <h2 className={styles.CardDecadeBottom}>
              {winner.decadebottom}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreWinners;