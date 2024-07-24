import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ArtistasLista from "./ArtistasLista";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/artistas" element={<ArtistasLista />}/>
      </Routes>
    </Router>
  )
};

export default App;