import { useEffect, useRef, useState } from "react";
import styles from "./Preloader.module.css";
import assetList from "./assetList";
import VerticalBar from "./VerticalBar";
import { useGSAP } from "@gsap/react";

export default function Preloader({setIsLoading,onFinish,}) {
  const hasRun = useRef(false);

  const [percentageLoaded, setPercentageLoaded] = useState(0);

  const numAssets =
    assetList.images.length +
    assetList.videos.length;

  const { contextSafe } = useGSAP();
useEffect(() => {
  console.log("Preloader Mounted");
}, []);
  const cacheAssets = async () => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    const handleLoaded = (callback) => {
      setPercentageLoaded((prev) => prev + 100 / numAssets);
      callback();
    };

    const promises = [
      ...assetList.images.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();

            img.src = src;

            img.onload = () =>
              handleLoaded(() => resolve(img));

            img.onerror = (err) =>
              handleLoaded(() => reject(err));
          })
      ),

      ...assetList.videos.map(
        (src) =>
          new Promise((resolve, reject) => {
            const video =
              document.createElement("video");

            video.src = src;
            video.preload = "auto";

            video.onloadeddata = () =>
              handleLoaded(() => resolve(video));

            video.onerror = (err) =>
              handleLoaded(() => reject(err));
          })
      ),
    ];

    await Promise.all(promises).catch(() => {});

    contextSafe(() => {clearTimeout(timeout);

setTimeout(() => {
  if (onFinish) {
    onFinish();
  } else if (setIsLoading) {
    setIsLoading(false);
  }
}, 2000);
    })();
  };

  useEffect(() => {
    if (hasRun.current) return;

    hasRun.current = true;

    cacheAssets();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.preloader}>
      <div className={styles.equalizer}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <VerticalBar
              key={i}
              setOn={percentageLoaded >= (i + 1) * 20}
            />
          ))}
      </div>
    </div>
  );
}