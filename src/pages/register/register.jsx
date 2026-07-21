import React, { useRef,useState} from "react";
import axios from "axios";
import BandInfo from "../../components/registration/BandInfo";
import ContactInfo from "../../components/registration/ContactInfo";
import Header from "../../components/registration/Header";
import styles from "../../styles/registration/Register.module.css";
import Toaster from "../../components/registration/Toaster";


const venues = ["Mumbai", "Bangalore", "Chennai", "Delhi", "Kolkata", "Online"];
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
  const RegisterFormRef = useRef(null);
   const [notification, setNotification] = useState(null);
    const addNotif = (message) => {
      setNotification(
        {
          message,
          key: Date.now(),
        },
    );
    };
  const handleFormSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const data = new FormData(RegisterFormRef.current);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
    const baseLink = "https://prereg.bits-oasis.org";
   
    if (


      Object.keys(formData).every((key) => {
  console.log("Checking:", key, formData[key]);

  const isValid = formInputPattern[key].test(
    formData[key].toLowerCase()
  );

  console.log("Valid:", isValid);

  if (!isValid) {
    console.log("Failed key:", key);

    if (key === "name" || key === "city") {
      addNotif(`Please fill the band ${key}.`);
    } else if (key === "number_of_members") {
      addNotif("Number invalid");
    } else if (key.includes("name")) {
      addNotif("Name invalid");
    } else if (key.includes("phone")) {
      console.log("PHONE NOTIFICATION");
      addNotif("Phone invalid");
    }

    return false;
  }

  return true;
}));
      // !Object.keys(formData).every((key) => {
      //   const isValid = formInputPattern[key].test(formData[key].toLowerCase());

      //   if (!isValid && addNotif) {
      //     if (key === "name" || key === "city") {
      //       addNotif(`Please fill the band ${key}.`);
      //     } else if (key === "number_of_members") {
      //       addNotif(
      //         "Please fill the number of band members in your band with numbers.",
      //       );
      //     } else if (key.includes("name")) {
      //       addNotif(
      //         "Please fill the contact names in the correct format: They can only contain alphabets, numbers or whitespace. Also the required contact fields cannot be blank.",
      //       );
      //     } else if (key.includes("phone")) {
      //       addNotif(
      //         "Please fill the contact phone number in the correct format: They must be of 10 digits only. Also the required contact fields cannot be blank.",
      //       );
      //     } else if (key === "email_address") {
      //       addNotif("Please fill the email in the correct format.");
      //     } else if (key === "music_since") {
      //       addNotif(
      //         "Please fill the year of inception of the band correctly in YYYY format.",
      //       );
      //     }
      //   }
      //   return isValid;
      // })
      
    {
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

    axios
      .post(
        `${baseLink}${
          formData.venue === "Online"
            ? "/RoctavesOnlineReg/"
            : "/RoctavesOfflineReg/"
        }`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
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
    <div className={styles.RegisterWrapper}>
      <Header />
      <div className="register-container">
        <p className={styles.eventInfo}>
          <span className={styles.line}></span>
          BITS PILANI • OASIS '26
        </p>
        <h1 className="styles.registerTitle">
          <span className={styles.Regis}>REGIS</span>
          <span className={styles.Tration}>TRATION</span>
        </h1>

        <form
          ref={RegisterFormRef}
          onSubmit={handleFormSubmit}
          className={styles.RegisterForm}
        >
          <div className={styles.InfoWrapper}>
            <BandInfo />
            <ContactInfo />
          </div>
          <div className="register-actions">
            <button type="button">Back</button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
       <Toaster

        notification={notification}
        setNotification={setNotification}

      />
    </div>
  );
};

export default Register;
