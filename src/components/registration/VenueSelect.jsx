import React, { useState } from "react";
import styles from "../../styles/registration/VenueSelect.module.css";

const venues = [
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Kolkata",
  "Online",
];

const VenueSelect = () => {
  const [selectedVenue, setSelectedVenue] = useState("");

  return (
    <div className={styles.VenueSelectWrapper}>
      <input
        type="hidden"
        name="venue"
        value={selectedVenue}
      />

      <h2 className={styles.VenueSelectHeading}>
        VENUE YOU'RE CONTESTING FROM:
      </h2>

      <div className={styles.VenueSelectgridContainer}>
        {venues.map((venue) => (
          <button
            key={venue}
            type="button"
            className={`${styles.VenueSelectgridItem} ${
              selectedVenue === venue ? styles.selected : ""
            }`}
            onClick={() => setSelectedVenue(venue)}
          >
            {venue}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VenueSelect;