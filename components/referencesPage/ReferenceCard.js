import { Avatar, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const ReferenceCard = ({ styles, person }) => {
  return (
    <>
      <img src={person.src} alt={person.name} className={styles.referenceAvatar} />
      <div className={styles.referenceContentBox}>
        <div className={styles.referenceName}>{person.name}</div>
        <div className={styles.referenceTitle}>{person.title}</div>
        <div className={styles.referenceJob}>{person.job}</div>
      </div>
      <FaChevronRight className={styles.referenceArrow} />
    </>
  );
};

export default ReferenceCard;
