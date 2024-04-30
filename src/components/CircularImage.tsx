import styles from "./CircularImage.module.css";
interface Props {
  image: string;
}

const CircularImage = ({ image }: Props) => {
  return (
    <div className={styles["circular-image"]}>
      <img src={image} alt="Circular" />
    </div>
  );
};

export default CircularImage;
