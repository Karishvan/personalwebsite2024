import { ReactNode } from "react";
import styles from "./Project.module.css";
import LinkButton from "./LinkButton";
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

        <p className={styles["project-description"]}>{children}</p>

        <div className={styles["project-button-container"]}>
          <LinkButton className="project-button" href={github} target="_blank">
            <img className="icon-logo" src="images/github-logo.png" />
            <div>View Project</div>
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Project;
