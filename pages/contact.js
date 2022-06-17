import styles from "../styles/Contact.module.css";
import { Typography } from "@mui/material";
import Link from "next/link";
export default function Home() {
  return (
    <div className="pageContainer">
      <div className="splitContainer">
        <div className={styles.leftTextBox}>
          <Typography variant="h3" className={styles.title}>
            I would love to hear from you
          </Typography>
          <Typography variant="h5" className={styles.title2}>
            You can check my links
          </Typography>
        </div>
      </div>
      <div className="splitContainer">
        <div className={styles.rightTextBox}>
          <Link
            href="https://www.linkedin.com/in/%C3%A7a%C4%9Fr%C4%B1-%C3%B6-9014a2241/"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="referer"
          >
            <Typography className={styles.link} variant="h3">
              LinkedIn
            </Typography>
          </Link>
          <Link
            href="https://github.com/HaCa4"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="referer"
          >
            <Typography className={styles.link} variant="h3">
              Github
            </Typography>
          </Link>
          <Link
            href="mailTo:ozagarcagri@gmail.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="referer"
          >
            <Typography className={styles.link} variant="h3">
              Mail
            </Typography>
          </Link>
          <Link
            href="/cagri-o.pdf"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="referer"
          >
            <Typography className={styles.link} variant="h3">
              Resume
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
