import { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
  children: ReactNode;
  image: string;
  title: string;
}

const Card = ({ children, image, title }: Props) => {
  return (
    <div className={"card " + styles["my-card"]}>
      <img src={image} className="card-img-top" alt="..." />
      <div className={"card-body"}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};

export default Card;
