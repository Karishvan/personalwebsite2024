import { ReactNode } from "react";
import styles from "./LinkButton.module.css";

interface Props {
  className: string;
  children: ReactNode;
  href: string;
  target?: "_blank" | "";
}
const LinkButton = ({ className, children, href, target = "" }: Props) => {
  return (
    <a
      className={styles["button-link"]}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      <button className={styles[className]}>{children}</button>
    </a>
  );
};

export default LinkButton;
