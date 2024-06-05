import React from "react";
import styles from "./Fifth.module.css";
import HubliMap from "./HubliMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Fifth = () => {
  return (
    <>
      <div className={styles.image}>
        <HubliMap />
      </div>
      <p className={styles.text}>
        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#4ab3e7" }} />{" "}
        &nbsp;&nbsp; Indicates the Charging Ponts
      </p>
    </>
  );
};

export default Fifth;
