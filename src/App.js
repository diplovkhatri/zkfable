import "./App.css";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import Looks from "./components/Looks";
import Intro from "./components/Intro";
import Roadmap from "./components/roadmap/Roadmap";
import { Fade } from "react-reveal";

function App() {
  return (
    <div className="App overflow-hidden">
      {/* <Top /> */}
      <Intro />
      <Looks />
      <Roadmap />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
