import "./Header.css";
import CircularImage from "./CircularImage";

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
    <div id="home">
      <div className="home-typed-section">
        <h1 className="home-title">Hi 👋, I am Karishvan Ragunathan</h1>
        <h2 className="home-description">
          A {currAge} Year Old Computer Science Co-op Student at TMU driven to
          use technology to solve problems
        </h2>
        <div className="home-button">
          <a href="#about">
            <button className="generic-button">View More</button>
          </a>
        </div>
      </div>

      <CircularImage image="images/Karishvan.png"></CircularImage>
    </div>
  );
};

export default Header;
