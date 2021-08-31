import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Infos from "./components/Infos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App px-5 py-4">
      <div className="GlassSection">
        <div className="Bubble Bubble1"></div>
        {/* <div className="Bubble Bubble2"></div> */}
        <div className="Bubble Bubble3"></div>
        <div className="Bubble Bubble4"></div>
        <div className="Glass">
          <Header></Header>
          <Home></Home>
        </div>
      </div>
      <Projects></Projects>
      <Infos></Infos>
      <Footer></Footer>
    </div>
  );
}

export default App;
