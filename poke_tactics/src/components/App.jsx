import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {getAuth,onAuthStateChanged} from 'firebase/auth'
import app from "../credentials";
import Login from "./Login";
import NavBar from "./NavBar"
import Blog from "./Blog";
import Pokedex from "./Pokedex";
import Gyms from "./Gyms";
import Lab from "./Lab";
import Metas from "./Metas"; 
import { useEffect, useState } from "react";

const auth = getAuth(app)

function App() {
  const [user, setUser] =useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth,(userFirebase)=>{
      if(userFirebase){
        setUser(userFirebase);
      }else{
        setUser(null);
      }
    })
  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Blog/" element={<Blog />} />
        <Route path="NavBar/" element={<NavBar />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/metas" element={<Metas />} />
      </Routes>
    </Router>
  )
}

export default App
