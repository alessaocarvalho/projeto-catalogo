import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistaForm from "./ArtistaForm";
import ArtistasLista from "./ArtistasLista";
import ArtistaDetalhes from "./ArtistaDetalhes";

// Roteamento da aplicação React:

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/artistas" element={<ArtistasLista />} />
        <Route path="/novo-artista" element={<ArtistaForm />} />
        <Route path="/artistas/:id/" element={<ArtistaDetalhes />} />
      </Routes>
    </Router>
  )
};

export default App;