import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/landing/PastWinners.module.css";

import PastWinnersBg from "../../assets/images/pastWinners/PastWinnersBg.png";
import PastWinnersTitle from "../../assets/images/pastWinners/PastWinnersTitle.png";
import PastWinnersCardBg from "../../assets/images/pastWinners/PastWinnersCardBg.png";

import { pastWinnersData } from "../../data/pastWinnersData.js";

import Preloader from "../../components/preloader/Preloader";

const PastWinners = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState(null);

  const openWinner = (winner) => {
    setSelectedWinner(winner);
    setLoading(true);
  };

  if (loading) {
    return (
      <Preloader
        setIsLoading={() => {
          navigate("/past-winners", {
            state: {
              id: selectedWinner.id,
            },
          });
        }}
      />
    );
  }

  return (
    <div
      className={styles.PastWinnersWrapper}
      style={{ backgroundImage: `url(${PastWinnersBg})` }}
    >
      <img
        src={PastWinnersTitle}
        alt="Past Winners"
        className={styles.PastWinnersTitle}
      />

      <div className={styles.CardContainer}>
        {pastWinnersData.map((winner) => (
          <div
            key={winner.id}
            className={styles.Card}
            style={{ backgroundImage: `url(${PastWinnersCardBg})` }}
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

export default PastWinners;