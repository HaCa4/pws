import styles from "../styles/Works.module.css";
import { Avatar } from "@mui/material";
import { useState } from "react";
import WorkCard from "../components/worksPage/WorkCard";
import { worksList } from "../constants/constants";
export default function Works() {
  const [selected, setSelected] = useState(0);

  const renderMessage = (x) => {
    return (
      <div className={styles.workBox}>
        <img src={worksList[selected].src} className={styles.workImage} variant="h5" />
        <div className={styles.workLink}>
          <a href={worksList[x].link} style={{ textDecoration: "none" }}>
            Would you like to visit website?
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="pageContainer">
      <div className="splitContainer">
        <div className="headLineLeft"> Some of my</div>
        <div className={styles.workCardContainer}>
          {worksList.map((work, index) => (
            <div
              onClick={() => setSelected(index)}
              key={index}
              style={{ backgroundColor: `${selected == index ? "rgb(235, 119, 12, 0.4)" : ""}` }}
              className={styles.workCard}
            >
              <WorkCard work={work} styles={styles} />
            </div>
          ))}
        </div>
      </div>
      <div className="splitContainer">
        <div className="headLineRight">work details</div>
        {renderMessage(selected)}
      </div>
    </div>
  );
}
