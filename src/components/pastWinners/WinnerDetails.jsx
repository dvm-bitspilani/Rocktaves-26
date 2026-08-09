import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pastWinners/WinnerDetails.module.css";
import WinnerDetailsBg from "../../assets/images/pastWinners/WinnerDetailsBg.png";
import SideImage_1 from "../../assets/images/pastWinners/2010-2015/sideimage1.png";
import SideImage_2 from "../../assets/images/pastWinners/2010-2015/sideimage2.png";
import BackArrow from "../../assets/images/pastWinners/BackArrow.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================================================================
   TUNING KNOBS
   ================================================================ */
const WIPE_START = 5; // first wipe position
const WIPE_INTERVAL = 2; // gap between wipes (enough room for side panels)
const WIPE_DURATION = 1.5;
const TEXT_DURATION = 1;
const SIDE_DURATION = 3.5; // how long side panels take to scroll through

const WinnerDetails = ({ data }) => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const circlesmallref = useRef(null);

  // Dynamic refs
  const swipeImgRefs = useRef([]);
  const swipeCircleRefs = useRef([]);
  const labelRefs = useRef([]);
  const sideRefs = useRef([]); // one .side div per band

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    const bands = data.bands || [];
    const transitions = bands.slice(1);

    // Total timeline length: enough for all phases + all band side panels
    const lastBandSideEnd =
      3 + (bands.length - 1) * WIPE_INTERVAL + SIDE_DURATION;
    const totalEnd = Math.max(3000, lastBandSideEnd * 250);

    const ctx = gsap.context(() => {
      /* ════════════════════════════════════════════════════════
         INITIAL STATE
         ════════════════════════════════════════════════════════ */

      gsap.set(imageRef1.current, { yPercent: -50 });
      gsap.set(circleRef.current, { z: 60 });
      gsap.set(circlesmallref.current, { xPercent: -50, yPercent: -50, z: 71 });

      swipeImgRefs.current.forEach((el) => {
        if (el) gsap.set(el, { z: 50 });
      });
      swipeCircleRefs.current.forEach((el) => {
        if (el) gsap.set(el, { z: 65 });
      });

      labelRefs.current.forEach((el, i) => {
        if (el && i > 0) gsap.set(el, { opacity: 0 });
      });

      /* ════════════════════════════════════════════════════════
         SCROLL TIMELINE
         ════════════════════════════════════════════════════════ */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalEnd}`,
          scrub: 3,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      // ── Phase 1 (0→2): Stack flattens + text exits ─────────

      tl.to(
        imageRef.current,
        {
          z: 40,
          scale: 0.8,
          x: window.innerWidth * 0.05,
          rotateY: 0,
          ease: "none",
          duration: 2,
        },
        0,
      );

      tl.to(
        imageRef1.current,
        {
          height: "45vw",
          width: "45vw",
          z: 40,
          scale: 1,
          rotateY: 0,
          ease: "none",
          duration: 2,
        },
        0,
      );

      tl.to(
        imageRef2.current,
        {
          z: 40,
          scale: 1,
          x: -window.innerWidth * 0.23,
          rotateY: 0,
          ease: "none",
          duration: 2,
        },
        0,
      );

      tl.to(
        imageRef3.current,
        {
          z: 40,
          scale: 1,
          x: -window.innerWidth * 0.4,
          rotateY: 0,
          ease: "none",
          duration: 2,
        },
        0,
      );

      tl.to(
        imageRef4.current,
        {
          z: 40,
          scale: 1,
          x: -window.innerWidth * 0.47,
          rotateY: 0,
          ease: "none",
          duration: 2,
        },
        0,
      );

      tl.to(
        textRef.current,
        {
          y: -window.innerWidth * 0.9,
          ease: "none",
          duration: 2,
        },
        0,
      );

      // ── Phase 2 (2→3): Vinyl + label appear ────────────────

      tl.to(
        circleRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "none",
        },
        2,
      );

      tl.to(
        circlesmallref.current,
        {
          width: "20vw",
          height: "20vw",
          opacity: 1,
          duration: 0.5,
          ease: "none",
        },
        2,
      );

      if (labelRefs.current[0]) {
        tl.to(
          labelRefs.current[0].children,
          {
            opacity: 1,
            duration: 0.3,
          },
          2.3,
        );
      }

      // ── Phase 3+: Side panels for EACH band ───────────────
      // Each band's side panels scroll up through the viewport.
      // Band 0 starts at position 3 (right after vinyl appears).
      // Each subsequent band starts at its wipe position.

      bands.forEach((band, i) => {
        const sideEl = sideRefs.current[i];
        if (!sideEl) return;

        // Band 0 side panels start at position 3
        // Band 1+ side panels start when their wipe begins
        const sideStartPos = i === 0 ? 3 : WIPE_START + (i - 1) * WIPE_INTERVAL;

        tl.to(
          sideEl,
          {
            y: -window.innerHeight * 2.5,
            ease: "power1.inOut",
            duration: SIDE_DURATION,
          },
          sideStartPos,
        );
      });

      // ── Phase 4+: Dynamic wipes + label text swaps ─────────

      transitions.forEach((band, i) => {
        const pos = WIPE_START + i * WIPE_INTERVAL;
        const imgEl = swipeImgRefs.current[i];
        const circEl = swipeCircleRefs.current[i];
        const prevText = labelRefs.current[i];
        const nextText = labelRefs.current[i + 1];

        if (imgEl) {
          tl.to(
            imgEl,
            {
              clipPath: "inset(0% 0 0 0)",
              duration: WIPE_DURATION,
              ease: "none",
            },
            pos,
          );
        }

        if (circEl) {
          tl.to(
            circEl,
            {
              clipPath: "inset(0% 0 0 0)",
              duration: WIPE_DURATION,
              ease: "none",
            },
            pos,
          );
        }

        if (prevText) {
          tl.to(
            prevText,
            {
              yPercent: -150,
              opacity: 0,
              duration: TEXT_DURATION,
              ease: "power1.inOut",
            },
            pos,
          );
        }

        if (nextText) {
          tl.to(
            nextText,
            {
              top: "50%",
              yPercent: -50,
              opacity: 1,
              duration: TEXT_DURATION,
              ease: "power1.inOut",
            },
            pos,
          );
        }
      });

      /* ════════════════════════════════════════════════════════
         INFINITE SPINS
         ════════════════════════════════════════════════════════ */

      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      swipeCircleRefs.current.forEach((el) => {
        if (!el) return;
        const img = el.querySelector("img");
        if (img) {
          gsap.to(img, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  const bands = data.bands || [];
  const baseBand = bands[0];
  const transitions = bands.slice(1);

  const getBandImg = (band, fallback) => {
    if (band.albumStack?.[3]) return band.albumStack[3];
    if (band.middleImg) return band.middleImg;
    return fallback;
  };

  const baseImg = baseBand?.albumStack?.[3] || baseBand?.middleImg;

  return (
    <div>
      <div
        ref={containerRef}
        className={styles.WinnerDetailsWrapper}
        style={{ backgroundImage: `url(${WinnerDetailsBg})` }}
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
                src={baseBand?.albumStack?.[3]}
                alt=""
                ref={imageRef1}
              />
              <img
                className={styles.img2}
                src={baseBand?.albumStack?.[1]}
                alt=""
                ref={imageRef2}
              />
              <img
                className={styles.img3}
                src={baseBand?.albumStack?.[2]}
                alt=""
                ref={imageRef3}
              />
              <img
                className={styles.img4}
                src={baseBand?.albumStack?.[0]}
                alt=""
                ref={imageRef4}
              />

              <img
                src={baseImg}
                className={styles.circle}
                alt=""
                ref={circleRef}
              />

              <div ref={circlesmallref} className={styles.smallcircle}>
                {bands.map((band, i) => (
                  <div
                    key={band.id}
                    ref={(el) => (labelRefs.current[i] = el)}
                    className={
                      i === 0 ? styles.circleTextTop : styles.circleTextBottom
                    }
                  >
                    <p>
                      Track:
                      <br />
                      {band.track}
                    </p>
                    <h4>{band.bandName}</h4>
                    <p>Released: {band.year}</p>
                  </div>
                ))}
              </div>

              {transitions.map((band, i) => {
                const wipeImg = getBandImg(band, baseImg);
                return (
                  <React.Fragment key={`wipe-${band.id}`}>
                    <div
                      ref={(el) => (swipeImgRefs.current[i] = el)}
                      className={styles.swipeImg}
                    >
                      <img src={wipeImg} alt="" />
                    </div>
                    <div
                      ref={(el) => (swipeCircleRefs.current[i] = el)}
                      className={styles.swipeCircle}
                    >
                      <img src={wipeImg} alt="" />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── DYNAMIC SIDE PANELS — one per band ─────────────── */}
        {bands.map((band, i) => (
          <div
            key={`side-${band.id}`}
            className={styles.side}
            ref={(el) => (sideRefs.current[i] = el)}
            style={{ zIndex: i + 1 }}
          >
            <div className={styles.left}>
              <img src={band.leftImg || SideImage_1} alt="" />
              <h4>TRACK</h4>
              <p>
                {band.aboutTrack ||
                  band.trackDescription ||
                  "Track description."}
              </p>
            </div>
            <div className={styles.right}>
              <img src={band.rightImg || SideImage_2} alt="" />
              <h4>ABOUT</h4>
              <p>
                {band.about || band.aboutDescription || "Band description."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={styles.mobileWrapper}>
        <div className={styles.mTitle}>
          {" "}
          <img
            src={data.BandNameTitle}
            alt="Band Title"
            className={styles.mBandName}
          />
          <img
            src={data.DecadeTitle}
            alt="Decade Title"
            className={styles.mDecadeTitle}
          />
        </div>
        <p className={styles.mDescription}>{data.description}</p>
        <div className={styles.mbottom}>
          <div className={styles.mright}>
            <img src={SideImage_2} alt="" />
            <h4>About</h4>
            <p>
              Parikrama is a rock band from Delhi, India, formed in 1991 in
              Delhi. The band is considered to be one of Asia's biggest rock
              groups. It's known for its high-energy live performances and has
              released many singles in its 3 decade long career.
            </p>
          </div>
          <div className={styles.middle}>
            <img src={baseImg} alt="baseImg" className={styles.mrect} />
            <img src={baseImg} className={styles.mcircle} alt="" />
            <div className={styles.msmallcircle}>
              <div className={styles.mcircletext}>
                <p>
                  Track:
                  <br />
                  fwff
                </p>
                <h4>bandname</h4>
                <p>Released:</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.mleft}>
            <img src={SideImage_1} alt="" />
            <h4>Track</h4>
            <p>
              Released in 2019, "Tears Of The Wizard" is a notable track by the
              famous Indian rock band Parikrama. This release highlights the
              musical legacy of a Delhi group celebrated throughout Asia for
              delivering incredibly dynamic and energetic live stage
              performances.
            </p>
          </div>
          <div></div>
        </div>
      </div> */}

      <div className={styles.mobileWrapper}>
  <div className={styles.mTitle}>
    <img src={data.BandNameTitle} alt="Band Title" className={styles.mBandName} />
    <img src={data.DecadeTitle} alt="Decade Title" className={styles.mDecadeTitle} />
  </div>
  <p className={styles.mDescription}>{data.description}</p>

  {bands.map((band) => {
    const bandImg = band.albumStack?.[3] || band.middleImg || baseImg;
    return (
      <div className={styles.mbottom} key={`mobile-${band.id}`}>
        <div className={styles.mright}>
          <img src={band.rightImg || SideImage_2} alt="" />
          <h4>About</h4>
          <p>{band.about || band.aboutDescription || "Band description."}</p>
        </div>

        <div className={styles.middle}>
          <img src={bandImg} alt="" className={styles.mrect} />
          <img src={bandImg} alt="" className={styles.mcircle} />
          <div className={styles.msmallcircle}>
            <div className={styles.mcircletext}>
              <p>Track:<br />{band.track}</p>
              <h4>{band.bandName}</h4>
              <p>Released: {band.year}</p>
            </div>
          </div>
        </div>

        <div className={styles.mleft}>
          <img src={band.leftImg || SideImage_1} alt="" />
          <h4>Track</h4>
          <p>{band.aboutTrack || band.trackDescription || "Track description."}</p>
        </div>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default WinnerDetails;
