import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar"
import Blog from "./Blog";
import Pokedex from "./Pokedex";
import Gyms from "./Gyms";
import Lab from "./Lab";
import Metas from "./Metas"; 

function App() {
  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<Blog />}/>
        <Route path="/pokedex" element={<Pokedex />}/>
        <Route path="/gyms" element={<Gyms />}/>
        <Route path="/lab" element={<Lab />}/>
        <Route path="/metas" element={<Metas />}/>
      </Routes>
    </Router>
  )
}

export default App
