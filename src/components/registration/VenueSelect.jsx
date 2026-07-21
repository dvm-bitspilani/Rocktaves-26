import React, { useState, useRef, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("");
  const dropdownRef = useRef(null);

  // Close the menu when clicking anywhere else on the screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (venue) => {
    setSelectedVenue(venue);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      {/* Hidden input field for form submissions */}
      <input type="hidden" name="venue" value={selectedVenue} />

      {/* Main Bar / Trigger */}
      <div 
        className={`${styles.selectTrigger} ${isOpen ? styles.open : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedVenue || "Venue you can contest in:"}</span>
        <span className={styles.arrow}>▼</span>
      </div>

      {/* Inline Grid Dialog */}
      {isOpen && (
        <div className={styles.gridDialog}>
          <div className={styles.gridContainer}>
            {venues.map((venue) => (
              <button
                type="button"
                key={venue}
                className={`${styles.gridItem} ${selectedVenue === venue ? styles.selected : ""}`}
                onClick={() => handleSelect(venue)}
              >
                {venue}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueSelect;
