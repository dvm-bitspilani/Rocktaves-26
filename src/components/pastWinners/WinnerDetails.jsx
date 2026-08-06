// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../styles/pastWinners/WinnerDetails.module.css";
// import WinnerDetailsBg from "../../assets/images/pastWinners/WinnerDetailsBg.png";
// import BackArrow from "../../assets/images/pastWinners/BackArrow.png";
// const WinnerDetails = ({ data }) => {
//   const navigate = useNavigate();
//   if (!data) return null;
//   return (
//     <div
//       className={styles.WinnerDetailsWrapper}
//       style={{
//         backgroundImage: `url(${WinnerDetailsBg})`,
//       }}
//     >
//       <button
//         className={styles.BackButton}
//         onClick={() => navigate("/")}
//       >
//         <img
//           src={BackArrow}
//           alt="Back"
//         />
//       </button>

//       <div className={styles.WinnerDetailsContentWrapper}>
//         <div className={styles.WinnerDetailsLeftSection}>
//           <img
//             src={data.BandNameTitle}
//             alt="BandTitle"
//             className={styles.BandName}
//           />

//           <img     src={data.DecadeTitle} alt="DecadeTitle" className={styles.DecadeTitle}>
//           </img>

//           <p className={styles.Description}>
//             {data.description}
//           </p>
//         </div>
//         <div className={styles.WinnerDetailsRightSection}>
//           <img
//             src={data.albumStack}
//             alt="albumstack"
//             className={styles.AlbumStack}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WinnerDetails;


import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pastWinners/WinnerDetails.module.css";
import WinnerDetailsBg from "../../assets/images/pastWinners/WinnerDetailsBg.png";
import BackArrow from "../../assets/images/pastWinners/BackArrow.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WinnerDetails = ({ data }) => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
  if (!containerRef.current || !imageRef.current || !textRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    // Animate both at the same time
    tl.to(
      imageRef.current,
      {
        z: 40,
        scale: 1,
        x: -window.innerWidth * 0.2,
        rotateY: 0,
        ease: "none",
      },
      0 // start at time 0
    ).to(
      textRef.current,
      {
        y: -window.innerWidth * 0.5,
        ease: "none",
      },
      0 // start at the same time
    );
  }, containerRef);

  return () => ctx.revert();
}, []);
  if (!data) return null;

  return (
    <div
      ref={containerRef}
      className={styles.WinnerDetailsWrapper}
      style={{
        backgroundImage: `url(${WinnerDetailsBg})`,
      }}
    >
      <button
        className={styles.BackButton}
        onClick={() => navigate("/")}
      >
        <img src={BackArrow} alt="Back" />
      </button>

      <div className={styles.WinnerDetailsContentWrapper}>
        <div ref={textRef} className={styles.WinnerDetailsLeftSection}>
          <img
            src={data.BandNameTitle}
            alt="Band Title"
            className={styles.BandName}
          />

          <img
            src={data.DecadeTitle}
            alt="Decade Title"
            className={styles.DecadeTitle}
          />

          <p className={styles.Description}>
            {data.description}
          </p>
        </div>

        <div className={styles.WinnerDetailsRightSection}>
          <img
            ref={imageRef}
            src={data.albumStack}
            alt="Album Stack"
            className={styles.AlbumStack}
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerDetails;