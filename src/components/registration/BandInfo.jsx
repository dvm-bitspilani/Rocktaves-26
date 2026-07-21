import React from "react";
import BandInput from "./BandInput";
import VenueSelect from "./VenueSelect";
import styles from "../../styles/registration/BandInfo.module.css";

const bandFields = [
  {
    name: "name",
    placeholder: "Band Name",
    type: "text",
    maxLength: 50,
  },
  {
    name: "email_address",
    placeholder: "Your Email",
    type: "email",
    maxLength: 254,
  },
  {
    name: "number_of_members",
    placeholder: "Number of Band Members",
    type: "text",
    maxLength: 4,
  },
  {
    name: "music_since",
    placeholder: "Year of Inception of Band",
    type: "text",
    maxLength: 4,
  },
  {
    name: "city",
    placeholder: "City you're based in",
    type: "text",
    maxLength: 30,
  },
];

const BandInfo = () => {
  return (
    <div className={styles.BandInfoWrapper}>
      
      <h2 className={styles.BandInfoTitle}>Band Info</h2>
    <div className={styles.BandInfoInputField}>    
          {bandFields.map((field) => (
        <BandInput
          key={field.name}
          {...field}
        />
      ))}

      <VenueSelect />
      </div>

    </div>
  );
};

export default BandInfo;