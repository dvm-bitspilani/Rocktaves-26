import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pastWinners/WinnerDetails.module.css";
import WinnerDetailsBg from "../../assets/images/pastWinners/WinnerDetailsBg.png";
import BackArrow from "../../assets/images/pastWinners/BackArrow.png";
import TestCircle from "../../assets/images/pastWinners/2010-2015/testcircle.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WinnerDetails = ({ data }) => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const circlesmallref = useRef(null);
  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600",
          scrub: 3,
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
          x: -window.innerWidth * 0.23,
          rotateY: 0,
          ease: "none",
        },
        0, // start at time 0
      )
        .to(
          textRef.current,
          {
            y: -window.innerWidth * 0.5,
            ease: "none",
          },
          0, // start at the same time
        )
        .to(circleRef.current, {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        })
        .to(
          circlesmallref.current,
          {
            css: {
              height: "10vw",
              opacity: 1,
              width: "10vw",
            },
            duration: 0.1,
            ease: "none",
          },
          "<",
        )
        .to(circlesmallref.current.children, {
          opacity: 1,
        });

      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
        // pin:false
      });
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
      <button className={styles.BackButton} onClick={() => navigate("/")}>
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

          <p className={styles.Description}>{data.description}</p>
        </div>

        <div className={styles.WinnerDetailsRightSection}>
          <div ref={imageRef} className={styles.AlbumStack}>
            <img
              className={styles.img1}
              src={data.albumStack1}
              alt="Album Stack"
            />
            <img
              className={styles.img2}
              src={data.albumStack2}
              alt="Album Stack"
            />
            <img
              className={styles.img3}
              src={data.albumStack3}
              alt="Album Stack"
            />
            <img
              className={styles.img4}
              src={data.albumStack4}
              alt="Album Stack"
            />
            <img
              src={TestCircle}
              className={styles.circle}
              alt="test circle"
              ref={circleRef}
            />
            <div ref={circlesmallref} className={styles.smallcircle}>
                <p>Track:Of The Wizard</p>
              <h4>Parikrama</h4>
                <p>  Released:2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerDetails;
