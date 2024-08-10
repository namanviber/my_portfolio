import styles from "./projects.module.css";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

export default function Projects({ data }) {
  return (
    <div className={styles.projectCard}>
      <img src={data.imgPath} alt="card-img" className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{data.title}</h2>
        <p className={styles.cardText}>{data.description}</p>
        <div className={styles.buttons}>
          <a href={data.ghLink} target="_blank" className={styles.cardButton}>
            <BsGithub /> &nbsp;{data.isBlog ? "Blog" : "GitHub"}
          </a>
          {!data.isBlog && data.demoLink && (
            <a
              href={data.demoLink}
              target="_blank"
              className={styles.cardButton}
            >
              <CgWebsite /> &nbsp;Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
