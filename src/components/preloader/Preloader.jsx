import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Preloader.module.css";
import VerticalBar from "./VerticalBar";
import assets from "./assetList";

const Preloader = ({ onFinish }) => {
  const preloaderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  let loaded = 0;
  const total = assets.length;
  const minimumTime = 1000;
  const startTime = Date.now();

  const finishLoading = () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minimumTime - elapsed);

    setTimeout(() => {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          onFinish();
        },
      });
    }, remaining);
  };

  if (total === 0) {
    finishLoading();
    return;
  }

  assets.forEach((src) => {
    const img = new Image();

    img.src = src;

    img.onload = img.onerror = () => {
      loaded++;

      const percent = Math.round((loaded / total) * 100);
      setProgress(percent);

      if (loaded === total) {
        finishLoading();
      }
    };
  });
}, [onFinish]);
  return (
    <div className={styles.preloader} ref={preloaderRef}>
      <div className={styles.content}>
        <h1 className={styles.title}>ROCKTAVES</h1>

        <div className={styles.equalizer}>
          {[0, 1, 2, 3, 4].map((i) => (
            <VerticalBar
              key={i}
              active={progress >= (i + 1) * 20}
            />
          ))}
        </div>

        <p className={styles.percent}>{progress}%</p>

        <p className={styles.loading}>
          Loading Assets...
        </p>
      </div>
    </div>
  );
};

export default Preloader;