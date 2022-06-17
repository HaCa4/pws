import { Avatar } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className="pageContainer">
      <div className="splitContainer">
        <div className={styles.leftTextBox}>
          <p className={styles.title}> Hi I am Çağrı</p>
          <p className={styles.slogan}>
            Lets evaluate your UI challenges into interactive and joyful solutions together
          </p>
        </div>
      </div>
      <div className="splitContainer">
        <img src="/cagri-o.jpeg" alt="Çağrı Özağar" className={styles.avatar} />
        <div className={styles.rightTextBox}>
          <p className={styles.name}>Çağrı Özağar</p>
          <p className={styles.job}>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}
