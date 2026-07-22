import React from "react";
import styles from "../../styles/landing/About.module.css";
import AboutBg from "../../assets/images/about/AboutBg.svg";
import AboutTitle from "../../assets/images/about/AboutTitle.svg";

const About=()=>{
    return(
        <div className={styles.AboutWrapper} style={{backgroundImage:`url(${AboutBg})`}}>
            <img src={AboutTitle} alt="AboutTitle" className={styles.AboutTitle}/>
            <div className={styles.AboutTextWrapper}><p>
                Rocktaves is one of India’s oldest and most widespread 
                semi-professional rock band competitions. We have hosted 
                several prominent Indian bands, including <span>Indian Ocean </span>, 
               <span> Parikrama</span> and <span>Pakshee</span>, all of whom have graced our stage
                 as some of our earliest participants. Our aim is to give 
                 upcoming bands a platform to showcase their talents and 
                 gain recognition.
            </p>

            <p>
                Each year, we host preliminary rounds in areas where the 
                music scene is active — Mumbai, Bangalore, Kolkata, Chennai 
                and Delhi, as well as an online round, and the winners from
                 each get a cash prize and the chance to perform in the finals 
                 at Oasis.
            </p>
        </div>
        </div>
    )
}
export default About;