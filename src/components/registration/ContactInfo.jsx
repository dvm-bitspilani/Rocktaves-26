import React from "react";
import ContactInput from "./ContactInput";
import styles from "../../styles/registration/ContactInfo.module.css";
const contacts = [
  {
    contactNum: 1,
    nameField: {
      name: "name1",
      placeholder: "Name",
      type: "text",
      maxLength: 50,
    },
    phoneField: {
      name: "phone1",
      placeholder: "Contact Number",
      type: "tel",
      maxLength: 10,
    },
  },
  {
    contactNum: 2,
    nameField: {
      name: "name2",
      placeholder: "Name",
      type: "text",
      maxLength: 50,
    },
    phoneField: {
      name: "phone2",
      placeholder: "Contact Number",
      type: "tel",
      maxLength: 10,
    },
  },
  {
    contactNum: 3,
    optional: true,
    nameField: {
      name: "name3",
      placeholder: "Name",
      type: "text",
      maxLength: 50,
    },
    phoneField: {
      name: "phone3",
      placeholder: "Contact Number",
      type: "tel",
      maxLength: 10,
    },
  },
];
const ContactInfo=()=>{
    return(
        <div className={styles.ContactInfoWrapper}>   
        <h2 className={styles.ContactInfoTitle}>Contact Info</h2>
        {contacts.map((contact)=>(
            <ContactInput key={contact.contactNum} {...contact}/>
        ))}
        </div>
    )
}
export default ContactInfo;