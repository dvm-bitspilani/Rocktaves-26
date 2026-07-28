import { useEffect, useRef } from "react";
import styles from "./Preloader.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function VerticalBar({ setOn }) {
  const activeBarRef = useRef(null);

  const { contextSafe } = useGSAP();

  const animateBar = contextSafe(() => {
    const duration = randInt(3, 10) / 10;

    if (setOn) {
      gsap.to(activeBarRef.current, {
        height: "100%",
        duration,
      });
      return;
    }

    gsap.to(activeBarRef.current, {
      height: `${randInt(10, 90)}%`,
      duration,
      onComplete: animateBar,
    });
  });

  useEffect(() => {
    animateBar();
  });

  return (
    <div className={styles.verticalBar}>
      <div className={styles.activeBarWrapper}>
        <div
          ref={activeBarRef}
          className={styles.activeBar}
        />
      </div>
    </div>
  );
}