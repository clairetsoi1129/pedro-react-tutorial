import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
import {NavBar} from "./components/NavBar";

import {Lesson2} from "./pages/Lesson2";
import {Lesson3} from "./pages/Lesson3";
import {Lesson4} from "./pages/Lesson4";
import {Lesson6} from "./pages/Lesson6";
import {Lesson7} from "./pages/Lesson7";
import {Lesson10} from "./pages/Lesson10";
import {Form} from "./components/Form";

import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [username, setUsername] = useState("PedroTech");

  return (
    <div>
      <AppContext.Provider value={{username, setUsername}}>
        <QueryClientProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/lesson2" element={<Lesson2 />} />
            <Route path="/lesson3" element={<Lesson3 />} />
            <Route path="/lesson4" element={<Lesson4 />} />

            <Route path="/lesson6" element={<Lesson6 />} />
            <Route path="/lesson7" element={<Lesson7 />} />
            <Route path="/lesson10" element={<Lesson10 />} />
            <Route path="/lesson11" element={<Form />} />
            <Route path="/*" element={<h1>404 Page not found</h1>} />
          </Routes>
        </Router>
        </QueryClientProvider>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
