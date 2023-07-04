import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import Looks from "./components/Looks";
import Intro from "./components/Intro";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Top />
      <Intro />
      <Looks />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
