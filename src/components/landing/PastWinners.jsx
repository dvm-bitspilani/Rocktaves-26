import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/landing/PastWinners.module.css";
import PastWinnersBg from "../../assets/images/pastWinners/PastWinnersBg.png";
import PastWinnersTitle from "../../assets/images/pastWinners/PastWinnersTitle.png";
import PastWinnersCardBg from "../../assets/images/pastWinners/PastWinnersCardBg.png";
import { pastWinnersData } from "../../data/pastWinnersData.js";
const PastWinners = () => {
  const navigate = useNavigate();

  const openWinner = (winner) => {
    navigate("/past-winners", {
      state: {
        id: winner.id,
      },
    });
  };

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
            <h2 className={styles.CardDecade}>
              {winner.decadetop}
            </h2>

            <div className={styles.AlbumStack}>
              <img
                src={winner.albumStack}
                alt="albumstack"
              />
            </div>

            <h2 className={styles.CardDecade}>
              {winner.decadebottom}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastWinners;