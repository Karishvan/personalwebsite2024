import "./CircularImage.css";
interface Props {
  image: string;
}

const CircularImage = ({ image }: Props) => {
  return (
    <div className="circular-image">
      <img src={image} alt="Circular" />
    </div>
  );
};

export default CircularImage;
