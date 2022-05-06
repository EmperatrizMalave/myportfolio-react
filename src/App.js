import Home from "./PortfolioContainer/Home/Home";
import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Menu from "./PortfolioContainer/Menu/Menu";
import ContacMe from "./PortfolioContainer/ContactMe/ContactMe";

const App = function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <AboutMe/>
      <ContacMe/>
    </div>
  );
}

export default App;
