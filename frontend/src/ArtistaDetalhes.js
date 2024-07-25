import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import InputMask from "react-input-mask";
import "./css/ArtistaForm.css";

// Estado inicial:

const ArtistaDetalhes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [artista, setArtista] = useState({
        nome: "",
        tipo: "Solo",
        email: "",
        documento: "",
        tipo_documento: "CPF"
    });

    // Busca de dados do artista na API:

    useEffect(() => {
        const fetchArtista = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/artistas/${id}/`);
                setArtista(response.data);

            } catch (error) {
                console.error("Erro ao buscar artista: ", error);
                alert("Erro ao buscar artista.");
            }
        };
        fetchArtista();
    }, [id]);

    // Manipulação de mudanças no formulário:

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArtista({
            ...artista,
            [name]: value
        });
    };

    // Envio do formulário:

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/artistas/${id}/`, artista);
            alert("Artista atualizado com sucesso!");
            navigate("/artistas")
        } catch (error) {
            console.error("Erro ao atualizar artista: ", error);
            alert("Erro ao atualizar artista.");
        }
    };

    // Exclusão de artista:

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://127.0.0.1:8000/api/artistas/${id}/`, artista);
            alert("Artista deletado com sucesso!");
            navigate("/artistas");
        } catch (error) {
            console.error("Erro ao deletar artista: ", error);
            alert("Erro ao deletar artista.");
        }
    };

    // Renderização do formulário de detalhes/edição:

    return (
        <div className="form-container">
            <h1 className="title">Detalhes do Artista</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={artista.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Tipo:</label>
                    <select
                        name="tipo"
                        value={artista.tipo}
                        onChange={handleChange}
                    >
                        <option value="Solo">Solo</option>
                        <option value="Banda">Banda</option>
                    </select>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={artista.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Documento:</label>
                    <InputMask
                        mask={artista.tipo_documento === "CPF" ? "999.999.999-99" : "99.999.999-9"}
                        value={artista.documento}
                        onChange={handleChange}
                        required
                    >
                        {(inputProps) => <input type="text" {...inputProps} />}
                    </InputMask>
                </div>
                <div>
                    <label>Tipo de Documento:</label>
                    <select
                        name="tipo_documento"
                        value={artista.tipo_documento}
                        onChange={handleChange}
                    >
                        <option value="CPF">CPF</option>
                        <option value="RG">RG</option>
                    </select>
                </div>
                <div className="button-container">
                    <button className="button" type="submit">Atualizar Artista</button>
                    <button className="red-button" onClick={handleDelete}>Deletar Artista</button>
                </div>
            </form>
        </div>
    );
};

export default ArtistaDetalhes;