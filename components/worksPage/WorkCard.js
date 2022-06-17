import { Avatar, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";

const WorkCard = ({ styles, work, index }) => {
  return (
    <>
      <Avatar src={work.src} alt={work.name} className={styles.workAvatar} />
      <div className={styles.workContentBox}>
        <Typography variant="h5" className={styles.workName}>
          {work.name}
        </Typography>
        <Typography className={styles.workTitle}>{work.title}</Typography>
        <Typography className={styles.workJob}>{work.job}</Typography>
      </div>
      <FaChevronRight className={styles.workArrow} />
    </>
  );
};

export default WorkCard;
