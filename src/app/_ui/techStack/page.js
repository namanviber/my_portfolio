import styles from "./techStack.module.css";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiNodejs,
} from "react-icons/di";
import {
  SiPytorch,
  SiKeras,
  SiTensorflow,
  SiCss3,
  SiHtml5,
  SiDart,
  SiFlutter,
  SiFirebase,
  SiVisualstudiocode,
  SiMysql,
  SiPostman,
  SiFigma,
  SiAdobeillustrator,
  SiCanva,
  SiCoreldraw,
  SiAndroidstudio,
  SiKaggle,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import GitHubCalendar from "react-github-calendar";

export default function TechStack() {
  return (
    <center>
      <div className={styles.skillsContainer}>
        <h1 className={styles.lightHeading}>
          <strong>Technology Stack</strong>
        </h1>
        <h1 className={styles.sectionHeading}>
          <strong>Proficient Languages</strong>
        </h1>
        <div className={styles.skillsGrid}>
          {[CgCPlusPlus, DiPython, SiDart, SiHtml5, SiCss3].map(
            (Icon, index) => (
              <div key={index} className={styles.techIcon}>
                <Icon />
                <span>{Icon.name.replace(/^(Si|Di|Cg)/, "")}</span>
              </div>
            )
          )}
        </div>

        <h1 className={styles.sectionHeading}>
          <strong>Frameworks & Libraries</strong>
        </h1>
        <div className={styles.skillsGrid}>
          {[SiFlutter, DiReact, DiNodejs, SiPytorch, SiKeras, SiTensorflow].map(
            (Icon, index) => (
              <div key={index} className={styles.techIcon}>
                <Icon />
                <span>{Icon.name.replace(/^(Si|Di)/, "")}</span>
              </div>
            )
          )}
        </div>

        <h1 className={styles.sectionHeading}>
          <strong>Databases</strong>
        </h1>
        <div className={styles.skillsGrid}>
          {[DiMongodb, SiMysql, SiFirebase].map((Icon, index) => (
            <div key={index} className={styles.techIcon}>
              <Icon />
              <span>{Icon.name.replace(/^(Si|Di)/, "")}</span>
            </div>
          ))}
        </div>
        <h1 className={styles.sectionHeading}>
          <strong>Tools</strong>
        </h1>
        <div className={styles.skillsGrid}>
          {[
            DiGit,
            SiVisualstudiocode,
            SiPostman,
            SiFigma,
            SiAdobeillustrator,
            SiCanva,
            SiCoreldraw,
            SiAndroidstudio,
            SiKaggle,
          ].map((Icon, index) => (
            <div key={index} className={styles.techIcon}>
              <Icon />
              <span>{Icon.name.replace(/^(Si|Di)/, "")}</span>
            </div>
          ))}
        </div>

        <h1 className={styles.sectionHeading}>
          <strong>Days I Code</strong>
        </h1>
        <center>
          <GitHubCalendar username="namanviber" fontSize={16} blockSize={15} />
        </center>
      </div>
    </center>
  );
}
