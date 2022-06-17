import styles from "../styles/References.module.css";
import ReferenceCard from "../components/referencesPage/ReferenceCard";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { referenceList } from "../constants/constants";
export default function References() {
  const [selected, setSelected] = useState("0");
  const renderMessage = (x) => {
    return (
      <div className={styles.messageBox}>
        <Typography className={styles.messageContent} variant="h5">
          {referenceList[x].message}
        </Typography>
        <div className={styles.messageLink}>
          <a href={`mailto:${referenceList[x].mail}`} style={{ textDecoration: "none" }}>
            Would you like to ask {`${referenceList[x].name}`} about me?
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="pageContainer">
      <div className="splitContainer">
        <div className="headLineLeft">
          What i love about <br /> my work is
        </div>
        <div className={styles.referenceCardContainer}>
          {referenceList.map((person, index) => (
            <div
              onClick={() => setSelected(index)}
              key={index}
              className={styles.referenceCard}
              style={{ backgroundColor: `${selected == index ? "rgb(235, 119, 12, 0.4)" : ""}` }}
            >
              <ReferenceCard key={index} person={person} styles={styles} />
            </div>
          ))}
        </div>
      </div>
      <div className="splitContainer">
        <div className="headLineRight">
          my amazing
          <br /> colleagues
        </div>
        {renderMessage(selected)}
      </div>
    </div>
  );
}
