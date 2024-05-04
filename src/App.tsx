import Header from "./components/Header";
import Carousel from "./components/Carousel";
import "./App.css";
import Skills from "./components/Skills";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Skills></Skills>
      <Carousel></Carousel>
    </>
  );
}

export default App;
