import React from "react";
import ContactInput from "./ContactInput";
import styles from "../../styles/registration/ContactInfo.module.css";
const contacts = [
  {
    contactNum: 1,
    nameField: {
      name: "name1",
      placeholder: "NAME",
      type: "text",
      maxLength: 50,
    },
    phoneField: {
      name: "phone1",
      placeholder: "CONTACT NUMBER",
      type: "tel",
      maxLength: 10,
    },
  },
  {
    contactNum: 2,
    nameField: {
      name: "name2",
      placeholder: "NAME",
      type: "text",
      maxLength: 50,
    },
    phoneField: {
      name: "phone2",
      placeholder: "CONTACT NUMBER",
      type: "tel",
      maxLength: 10,
    },
  },
  {
    contactNum: 3,
    optional: true,
    nameField: {
      name: "name3",
      placeholder: "NAME",
      type: "text",
      maxLength: 50,
    },
    phoneField: {
      name: "phone3",
      placeholder: "CONTACT NUMBER",
      type: "tel",
      maxLength: 10,
    },
  },
];
const ContactInfo=()=>{
    return(
        <div className={styles.ContactInfoWrapper}> 
        <div className={styles.ContactInfoInputField}>  
        {contacts.map((contact)=>(
            <ContactInput key={contact.contactNum} {...contact}/>
        ))}
        </div>
        </div>
    )
}
export default ContactInfo;