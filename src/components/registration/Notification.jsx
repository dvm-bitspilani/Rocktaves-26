import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
 const Notification=({ message, onRemove })=> {
  const selfRef = useRef(null);
  useGSAP(() => {
  const timer = setTimeout(() => {
    gsap.to(selfRef.current, {
      autoAlpha: 0,
      duration: 1,
      onComplete: onRemove,
    });
  }, 3000);
  return () => clearTimeout(timer);
}, []);

  return (
    <div ref={selfRef}>
      {message}
    </div>
  );
}

export default Notification;