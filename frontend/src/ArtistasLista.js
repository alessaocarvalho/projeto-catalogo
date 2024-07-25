import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/ArtistasLista.css"

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

        <div className="artistas-container">
            <h1 className="title">Catálogo de Artistas</h1>
            <h2>Este é o catálogo de artistas. Clique sobre o nome de um artista para atualizar informações ou excluir.</h2>
            <h2><Link to={"/novo-artista"}>Clique aqui para adicionar um novo artista.</Link></h2>
            <table className="artistas-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {artistas.map(artista => (
                        <tr key={artista.id}>
                            <td>
                                <Link to={`/artistas/${artista.id}/`} className="link">
                                    {artista.nome}
                                </Link>
                            </td>
                            <td>{artista.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );

};

export default ArtistasLista;