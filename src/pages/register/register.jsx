import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BandInfo from "../../components/registration/BandInfo";
import ContactInfo from "../../components/registration/ContactInfo";
import Header from "../../components/registration/Header";
import styles from "../../styles/registration/Register.module.css";
import Toaster from "../../components/registration/Toaster";
import RegisterBg from "../../assets/images/register/RegisterBg.webp";
import BandInfoTitle from "../../assets/images/register/BandInfoTitle.png";
import ContactInfoTitle from "../../assets/images/register/ContactInfoTitle.png";
import footerStrip from "../../assets/images/register/footerStrip.webp";
import BandInput from "../../components/registration/BandInput";
import BackButton from "../../assets/images/register/BackArrow.png";
const venues = ["mumbai", "bangalore", "chennai", "delhi", "kolkata", "online"];
const formInputPattern = {
  name: /^.+$/,
  email_address: /^[a-z0-9._\-+]+@[a-z0-9\-.]+$/,
  number_of_members: /^\d+$/,
  venue: new RegExp(`^${venues.join("|")}$`),
  name1: /^[a-z 0-9]+$/,
  phone1: /^\d{10}$/,
  name2: /^[a-z 0-9]+$/,
  phone2: /^\d{10}$/,
  name3: /^([a-z 0-9]+)?$/,
  phone3: /^(\d{10})?$/,
  city: /^.+$/,
  music_since: /^\d{4}$/,
};

const Register = () => {
    const navigate = useNavigate();
  const RegisterFormRef = useRef(null);
  const [notification, setNotification] = useState(null);
  const addNotif = (message) => {
    setNotification({
      message,
      key: Date.now(),
    });
  };
  const handleFormSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const data = new FormData(RegisterFormRef.current);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
    const baseLink = "https://prereg.bits-oasis.org";

    if (
      !Object.keys(formData).every((key) => {
        const isValid = formInputPattern[key].test(formData[key].toLowerCase());

        if (!isValid && addNotif) {
          if (key === "name" || key === "city") {
            addNotif(`Please fill the band ${key}.`);
          } else if (key === "number_of_members") {
            addNotif(
              "Please fill the number of band members in your band with numbers.",
            );
          } else if (key.includes("name")) {
            addNotif(
              "Please fill the contact names in the correct format: They can only contain alphabets, numbers or whitespace. Also the required contact fields cannot be blank.",
            );
          } else if (key.includes("phone")) {
            addNotif(
              "Please fill the contact phone number in the correct format: They must be of 10 digits only. Also the required contact fields cannot be blank.",
            );
          } else if (key === "email_address") {
            addNotif("Please fill the email in the correct format.");
          } else if (key === "music_since") {
            addNotif(
              "Please fill the year of inception of the band correctly in YYYY format.",
            );
          }
        }
        return isValid;
      })
    ) {
      return;
    }

    if (addNotif && !formData.name3 !== !formData.phone3) {
      addNotif(
        "Please fill either both Name and Phone of Contact 3 or none of them.",
      );
      return;
    }
    if (addNotif && !formData.venue) {
      addNotif("Please check a venue to contest in.");
      return;
    }
    if (
      addNotif &&
      venues.filter((venue) => venue !== "online").includes(formData.city) &&
      formData.city !== formData.venue
    ) {
      addNotif(
        "Bands are only allowed to contest from cities from where they're based in if offline rounds are being held there.",
      );
      return;
    }

//  const submitData = {};
// for (const key in formData) {
//   const val = formData[key].toLowerCase().trim();
//   if (val !== "") {
//     submitData[key] = val;
//   }
// }
// submitData.phone = submitData.phone1;
// const submitData = {};
// for (const key in formData) {
//   const val = formData[key].trim();
//   if (val !== "") {
//     submitData[key] = key === "venue" ? val : val.toLowerCase();
//   }
// }
const submitData = {
  name: formData.name.trim(),
  city: formData.city.trim(),
  email_address: formData.email_address.trim(),
  phone: formData.phone1.trim(),              // API wants "phone", not "phone1"
  music_since: formData.music_since.trim(),
  number_of_members: parseInt(formData.number_of_members, 10),  // must be integer
  venue: formData.venue.trim(),
  name1: formData.name1.trim(),
  name2: formData.name2.trim(),
  phone2: formData.phone2.trim(),
};

// Only add optional fields if filled
if (formData.name3?.trim()) submitData.name3 = formData.name3.trim();
if (formData.phone3?.trim()) submitData.phone3 = formData.phone3.trim();

console.log("Sending to API:", JSON.stringify(submitData, null, 2));
    axios
      .post(
        `${baseLink}${
          formData.venue === "Online"
            ? "/RoctavesOnlineReg/"
            : "/RoctavesOfflineReg/"
        }`,

      { ...formData, phone: formData.phone1 }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        console.log("Response:", JSON.stringify(response.data, null, 2)); 
        if (addNotif) {
          if (response.data.status === "1") {
            addNotif("You've been successfully registered for Rocktaves 2026.");
          } else {
            addNotif(
              `Please fill the details correctly: ${response.data.message}`,
            );
          }
        }
      })
      .catch(() => {
        if (addNotif) {
          addNotif(
            "Something went wrong, your registration could not be completed.",
          );
        }
      });
  };

  return (
    <div
      className={styles.RegisterWrapper}
      style={{ backgroundImage: `url(${RegisterBg})` }}
    >
      <button type="button" className={styles.BackButton} onClick={() => navigate("/")}>
        <img src={BackButton} alt="Back" />
      </button>

      <Header />
      <div className="register-container">
        <form
          ref={RegisterFormRef}
          onSubmit={handleFormSubmit}
          className={styles.RegisterForm}
        >
          <div className={styles.InfoWrapper}>
            <div className={styles.leftcolumn}>
              <div className={styles.BandInfoTitleWrapper}>
                <img
                  src={BandInfoTitle}
                  alt=""
                  className={styles.BandInfoTitle}
                />
              </div>
              <BandInfo />{" "}
            </div>
            <div className={styles.rightcolumn}>
              <div className={styles.ContactInfoTitleWrapper}>
                <img
                  src={ContactInfoTitle}
                  alt=""
                  className={styles.ContactInfoTitle}
                />
              </div>
              <ContactInfo />
              <p className={styles.submitText}>
                BY SUBMITTING THIS FORM, YOU AGREE TO OUR TERMS OF REBELLION AND
                NOISE POLICIES. WE ARE NOT RESPONSIBLE FOR BLOWN SPEAKERS.
              </p>
              <button type="submit" className={styles.RegisterButton}>
                PROCEED TO REGISTER
              </button>
            </div>
          </div>
        </form>
        <img
          src={footerStrip}
          alt="footerStrip"
          className={styles.footerStrip}
        />
      </div>
      <Toaster notification={notification} setNotification={setNotification} />
    </div>
  );
};

export default Register;
