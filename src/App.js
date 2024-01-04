import { BrowserRouter  as Router,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Join from "./components/Join";
import Membership from "./components/Membership";

import "./style.css/App.scss"
import AboutUs from "./components/AboutUs";
import Trainer from "./components/Trainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Join/>
      <Membership/>
      <AboutUs/>
      <Trainer/>
    <Footer/>
    </>
    
  );
}

export default App;
