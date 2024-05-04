import styles from "./Header.module.css";
import CircularImage from "./CircularImage";
import LinkButton from "./LinkButton";

const Header = () => {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  let currentDay = new Date().getDate();

  let birthYear = 2004;
  let birthMonth = 10;
  let birthDay = 22;

  let currAge = currentYear - birthYear;
  if (
    !(
      currentMonth > birthMonth ||
      (currentMonth == birthMonth && currentDay >= birthDay)
    )
  ) {
    currAge -= 1;
  }
  return (
    <div id={styles["home"]}>
      <div className={styles["home-typed-section"]}>
        <h1 className={styles["home-title"]}>
          Hi 👋, I am Karishvan Ragunathan
        </h1>
        <h2 className={styles["home-description"]}>
          A {currAge} Year Old Computer Science Co-op Student at TMU driven to
          use technology to solve problems
        </h2>
        <div className={styles["home-button"]}>
          <LinkButton className="generic-button" href="#about">
            View More
          </LinkButton>
        </div>
      </div>

      <CircularImage image="images/Karishvan.png"></CircularImage>
    </div>
  );
};

export default Header;
