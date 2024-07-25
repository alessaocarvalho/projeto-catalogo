import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Axios para buscar os dados da API:

const ArtistasLista = () => {
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/artistas/")
            .then(response => setArtistas(response.data))
            .catch(error => console.error(error));
    }, []);

// Renderização da lista:

    return (

        <div>
            <h1>Lista de Artistas</h1>
            <ul>
                {artistas.map(artista => (
                    <li key={artista.id}>
                        <Link to={`/artistas/${artista.id}/`}>
                            {artista.nome} ({artista.tipo})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );

};

export default ArtistasLista;