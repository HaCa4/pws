import { FaChevronRight } from "react-icons/fa";

const WorkCard = ({ styles, work, index }) => {
  return (
    <>
      <img src={work.src} alt={work.name} className={styles.workAvatar} />
      <div className={styles.workContentBox}>
        <div variant="h5" className={styles.workName}>
          {work.name}
        </div>
        <div className={styles.workTitle}>{work.title}</div>
        <div className={styles.workJob}>{work.job}</div>
      </div>
      <FaChevronRight className={styles.workArrow} />
    </>
  );
};

export default WorkCard;
