import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {NavBar} from "./components/NavBar";

import {Lesson2} from "./pages/Lesson2";
import {Lesson3} from "./pages/Lesson3";
import {Lesson4} from "./pages/Lesson4";
import {Lesson6} from "./pages/Lesson6";
import {Lesson7} from "./pages/Lesson7";

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />
          <Route path="/lesson4" element={<Lesson4 />} />

          <Route path="/lesson6" element={<Lesson6 />} />
          <Route path="/lesson7" element={<Lesson7 />} />
          <Route path="/*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
