import React from "react";
import styles from "../../styles/landing/Timeline.module.css";
import TimelineBg from "../../assets/images/timeline/TimelineBg.svg";
import TimelineTitle from "../../assets/images/timeline/TimelineTitle.svg";
import StepBg_1 from "../../assets/images/timeline/StepBg_1.svg";
import StepBg_2 from "../../assets/images/timeline/StepBg_2.svg";
import StepBg_3 from "../../assets/images/timeline/StepBg_3.svg";

const Timeline = () => {
  return (
    <div
      className={styles.TimelineWrapper}
      style={{ backgroundImage: `url(${TimelineBg})` }}
    >
      <img
        src={TimelineTitle}
        alt="TimelineTitle"
        className={styles.TimelineTitle}
      />
      <div className={styles.StepsWrapper}>
        <div
          className={styles.Step_1}
          style={{ backgroundImage: `url(${StepBg_1})` }}
        >
          <div className={styles.StepText_1}>
        
            <p>
              Bands that register on the website will be provided with the
              details of the venue and time slot for the preliminary round in
              their respective cities.
            </p>
            <p>
              For online participants, communication about the submission will
              be done separately.
            </p>
          </div>
        </div>
        <div
          className={styles.Step_2}
          style={{ backgroundImage: `url(${StepBg_2})` }}
        >
          <div className={styles.StepText_2}>

            <p>
              Each band is expected to perform for 15-20 minutes at their chosen
              venue. One winner from each city and one from each online round
              will qualify for the final round held at BITS Pilani.
            </p>
          </div>
        </div>
        <div
          className={styles.Step_3}
          style={{ backgroundImage: `url(${StepBg_3})` }}
        >
          <div className={styles.StepText_3}>
            
            <p>
              The finalists will be invited to play at Oasis, the annual
              cultural fest of BITS Pilani. The winning band will walk away with
              the title of the Rocktaves Winner for the 54th edition of Oasis
              and other prizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
