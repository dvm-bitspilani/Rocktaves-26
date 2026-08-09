// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import styles from "../../styles/pastWinners/PastWinnersPage.module.css";
// import WinnerDetails from "../../components/pastWinners/WinnerDetails";
// import MoreWinners from "../../components/pastWinners/MoreWinners";

// import { pastWinnersData } from "../../data/pastWinnersData.js";
// const PastWinnersPage = () => {
//   const { state } = useLocation();
//   const [selectedWinner, setSelectedWinner] = useState(
//     pastWinnersData.find((winner) => winner.id === state.id)
//   );
//   return (
//     <div className={styles.PastWinnersPage}>
//       <WinnerDetails data={selectedWinner} />
//       <MoreWinners
//         selectedWinner={selectedWinner}
//         setSelectedWinner={setSelectedWinner}
//       />
//     </div>
//   );
// };
// export default PastWinnersPage;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "../../styles/pastWinners/PastWinnersPage.module.css";

import WinnerDetails from "../../components/pastWinners/WinnerDetails";
import MoreWinners from "../../components/pastWinners/MoreWinners";

import { pastWinnersData } from "../../data/pastWinnersData.js";

const PastWinnersPage = () => {
  const location = useLocation();

  const selectedId = location.state?.id;

  const [selectedWinner, setSelectedWinner] = useState(() => {
    return pastWinnersData.find(
      (winner) => winner.id === selectedId
    );
  });

  // IMPORTANT:
  // This runs whenever location.state.id changes
  useEffect(() => {
    if (selectedId === undefined) return;

    const winner = pastWinnersData.find(
      (winner) => winner.id === selectedId
    );

    if (winner) {
      setSelectedWinner(winner);
    }
  }, [selectedId]);

  return (
    <div className={styles.PastWinnersPage}>
      <WinnerDetails data={selectedWinner} />
      <MoreWinners
        selectedWinner={selectedWinner}
        setSelectedWinner={setSelectedWinner}
      />
    </div>
  );
};

export default PastWinnersPage;