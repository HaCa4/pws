import { Avatar, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const ReferenceCard = ({ styles, person }) => {
  return (
    <>
      <Avatar src={person.src} alt={person.name} className={styles.referenceAvatar} />
      <div className={styles.referenceContentBox}>
        <Typography variant="h5" className={styles.referenceName}>
          {person.name}
        </Typography>
        <Typography className={styles.referenceTitle}>{person.title}</Typography>
        <Typography className={styles.referenceJob}>{person.job}</Typography>
      </div>
      <FaChevronRight className={styles.referenceArrow} />
    </>
  );
};

export default ReferenceCard;
