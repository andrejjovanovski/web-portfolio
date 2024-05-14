import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Notifications } from "react-push-notification";



function App() {
  return (
    <div>
      <Navbar />
      < Notifications />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div >
  );
}

export default App;
