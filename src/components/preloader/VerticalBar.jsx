import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Preloader.module.css";

const VerticalBar = ({ active }) => {
  const barRef = useRef(null);

  useEffect(() => {
    if (active) {
      gsap.to(barRef.current, {
        height: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
      return;
    }

    let tween;

    const animate = () => {
      tween = gsap.to(barRef.current, {
        height: `${Math.random() * 80 + 10}%`,
        duration: Math.random() * 0.4 + 0.2,
        ease: "power1.inOut",
        onComplete: animate,
      });
    };

    animate();

    return () => {
      if (tween) tween.kill();
    };
  }, [active]);

  return (
    <div className={styles.verticalBar}>
      <div className={styles.activeBar} ref={barRef}></div>
    </div>
  );
};

export default VerticalBar;