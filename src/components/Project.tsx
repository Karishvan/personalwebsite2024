import { ReactNode } from "react";
import styles from "./Project.module.css";
interface Props {
  title: string;
  children: ReactNode;
  image: string;
  github: string;
}
const Project = ({ title, children, image, github }: Props) => {
  return (
    <div className={styles["project-item"]}>
      <div className={styles["project-text-container"]}>
        <h3 className={styles["project-title"]}>
          <img
            className={styles["project-image-thumbnail"]}
            src={image}
            alt="project item"
          />
          {title}
        </h3>
        <div className={styles["content-section-text"]}>
          <p className={styles["project-description"]}>{children}</p>
        </div>
        <div className={styles["project-button-container"]}>
          <a
            className={styles["button-link"]}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles["project-button"]}>
              <img className="icon-logo" src="images/github-logo.png" />
              <div>View Project</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
