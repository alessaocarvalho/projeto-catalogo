import React, { useState } from "react";
import axios from "axios";
import "./css/ArtistaForm.css"

// Estado inicial:

const ArtistaForm = () => {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("Solo");
    const [email, setEmail] = useState("");
    const [documento, setDocumento] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("CPF");

    // Manipulação do envio:

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novoArtista = {
            nome,
            tipo,
            email,
            documento,
            tipo_documento: tipoDocumento
        };
        try {
            await axios.post("http://127.0.0.1:8000/api/artistas/", novoArtista);
            alert("Artista criado com sucesso!");

            // Limpa o formulário após envio bem sucedido:

            setNome("");
            setTipo("Solo");
            setEmail("");
            setDocumento("");
            setTipoDocumento("CPF");
        } catch (error) {
            console.error("Erro ao criar arista: ", error);
            alert("Erro ao criar artista.");
        }
    };

// Renderização do formulário:

    return (
        <div className="form-container">
            <h1 className="title">Novo Artista</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>Tipo:</label>
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="Solo">Solo</option>
                        <option value="Banda">Banda</option>
                    </select>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Documento:</label>
                    <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} required />
                </div>
                <div>
                    <label>Tipo de Documento:</label>
                    <select value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                        <option value="CPF">CPF</option>
                        <option value="RG">RG</option>
                    </select>
                </div>
                <button className="button" type="submit">Adicionar Artista</button>
            </form>
        </div>
    );

};

export default ArtistaForm;