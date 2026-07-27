import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../../styles/pastWinners/PastWinnersPage.module.css";
import WinnerDetails from "../../components/pastWinners/WinnerDetails";
import WinnerGallery from "../../components/pastWinners/WinnerGallery";
import CDSection from "../../components/pastWinners/CDSection";
import MoreDecades from "../../components/pastWinners/MoreDecades";

import { pastWinnersData } from "../../data/pastWinnersData.js";
const PastWinnersPage = () => {
  const { state } = useLocation();
  const [selectedWinner, setSelectedWinner] = useState(
    pastWinnersData.find((winner) => winner.id === state.id)
  );
  return (
    <div className={styles.PastWinnersPage}>
      <WinnerDetails data={selectedWinner} />
      <WinnerGallery data={selectedWinner} />
      <CDSection data={selectedWinner} />
      <MoreDecades
        selectedWinner={selectedWinner}
        setSelectedWinner={setSelectedWinner}
      />
    </div>
  );
};
export default PastWinnersPage;