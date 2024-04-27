import { useState } from "react";
import Project from "./components/Project";
import Carousel from "./components/Carousel";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Project
        title="QuickFix"
        image="/images/QuickFix.png"
        github="https://github.com/Karishvan/QuickFix"
      >
        An advanced bug reporting system that allows users on the same software
        development project to keep track of ongoing bugs within each sprint
      </Project>
      <Project
        title="MedVisor"
        image="/images/MedVisor.png"
        github="https://github.com/Karishvan/MedVisor"
      >
        A simple web application survey that gathers data of the user's symptoms
        and uses Machine Learning to provide a suggestion of the doctor they
        should visit
      </Project> */}
      <Carousel></Carousel>
    </>
  );
}

export default App;
