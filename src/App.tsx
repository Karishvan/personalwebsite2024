import { useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
    </>
  );
}

export default App;
