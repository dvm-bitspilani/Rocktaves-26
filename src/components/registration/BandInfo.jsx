import React from "react";
import BandInput from "./BandInput";
import VenueSelect from "./VenueSelect";
import styles from "../../styles/registration/BandInfo.module.css";

const bandFields = [
  {
    name: "name",
    heading: "Band Name :",
    type: "text",
    maxLength: 50,
  },
  {
    name: "city",
    heading: "CITY YOU'RE BASED IN",
    type: "text",
    maxLength: 30,
  },
  {
    name: "email_address",
    heading: "YOUR EMAIL:",
    type: "email",
    maxLength: 254,
  },
  {
    name: "number_of_members",
    heading: "TOTAL BAND MEMBERS:",
    type: "text",
    maxLength: 4,
  },
  {
    name: "music_since",
    heading: "YEAR OF INCEPTION:",
    type: "text",
    maxLength: 4,
  },
];

const BandInfo = () => {
  return (
    <div className={styles.BandInfoWrapper}>
      <div className={styles.BandInfoInputField}>
        <div className={styles.BandInputRow1}>
          <BandInput field={bandFields[0]} />
          <BandInput field={bandFields[1]} />
        </div>
        <div className={styles.BandInputRow2}>
          <BandInput field={bandFields[2]} />
        </div>
        <div className={styles.BandInputRow3}>
          <BandInput field={bandFields[3]} />
          <BandInput field={bandFields[4]} />
        </div>
        <div className={styles.BandInputRow4}>
          <VenueSelect />
        </div>
      </div>
    </div>
  );
};

export default BandInfo;
