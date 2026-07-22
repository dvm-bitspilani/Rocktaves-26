import React from "react";
import styles from "../../styles/landing/Rules.module.css";
import RulesBg from "../../assets/images/rules/RulesBg.svg";
import RulesTitle from "../../assets/images/rules/RulesTitle.svg";

const Rules = () => {
  return (
    <div className={styles.RulesWrapper} style={{backgroundImage:`url(${RulesBg})`}}>
      <img src={RulesTitle} alt="RulesTitle" className={styles.RulesTitle} />   {/*  need to reduce the space between heading and para */}
     <div className={styles.RulesListWrapper}>
      <ol className={styles.RulesList}>
        <li>
          Bands must submit <span>at least 15 minutes</span> of live content or three
          songs.The maximum time permissible will be 20 minutes.
        </li>
        <li>
          The performance <span>must be live</span>.Playing over a pre-recorded track is not
          allowed.
        </li>
        <li>
          Bands based in cities where the preliminary bands are being hosted are 
          <span> not allowed</span> to register for the online round.
        </li>
        <li>
          <span>Separate communication</span> regarding the online round will be communicated
          to the bands registered for the same.
        </li>
        <li>
          The<span> judging parameters</span> will be informed to the band before their
          performance.
        </li>

        <li>It is necessary to perform <span>only original compositions</span>.</li>
      </ol>
      </div>
    </div>
  );
};

export default Rules;
