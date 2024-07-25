# Projeto Gestão de Catálogo

Este projeto busca viabilizar de forma eficaz a gestão de um catálogo musical. O objetivo é que com esta aplicação seja possível listar, adicionar, editar e deletar artistas em uma interface intuitiva.

# Índice

1. [Tecnologias Utilizadas](#tecnologias-utilizadas)
2. [Requisitos](#requisitos)
3. [Instalação](#instalação)
4. [Uso](#uso)
5. [Endpoints da API](#endpoints-da-api)
6. [Componentes do Frontend](#componentes-do-frontend)


# Tecnologias Utilizadas

Durante o desenvolvimento desta aplicação, foram utilizadas as seguintes tecnologias:

| Tecnologia | Uso |
|----------|-----------------|
| Django | Framework backend |
| Django Rest Framework | Construção da API |
| React JS | Framework frontend |
| Postman | Testes de API |
| VS Code | Ambiente de desenvolvimento |

# Requisitos

* CRUD para artistas
* Tela para listar artistas
* Tela de detalhes/edição/remoção de artistas
* Tela para criação de artistas

# Instalação

A aplicação deve ser instalada seguindo os passos indicados

## Backend

Utilize um terminal para executar os passos abaixo:

### 1. Clonagem do repositório
`git clone https://github.com/alessaocarvalho/projeto-catalogo/`
### 2. Configuração do ambiente virtual
`python -m venv venv`  
`venv\Scripts\activate`
### 3. Instalação das depedências
`cd backend`  
`pip install -r requirements.txt`
### 4. Configuração do banco de dados
`python manage.py makemigrations`  
`python manage.py migrate`
### 5. Execução do servidor
`python manage.py runserver`

## Frontend

Utilize um terminal para executar os passos abaixo:

### 1. Navegação ao diretório frontend
`cd frontend`
### 2. Instalação das dependências
`npm install`
### 3. Execução do servidor
`npm start`

# Uso

### Aplicação React
`http://localhost:3000`
### API do backend
`http://localhost:8000/api/`

# Endpoints da API

Endpoints da API e suas funcionalidades

| Endpoint | Uso |
|----------|-----|
| `GET /api/artistas/` | Obter uma lista de todos os artistas |
| `POST /api/artistas/` | Criar um novo artista |
| `GET /api/artistas/{id}/` | Obter detalhes de um artista específico |
| `PUT /api/artistas/{id}/` | Atualizar um artista |
| `DELETE /api/artistas/{id}/` | Deletar um artista |

# Componentes do Frontend

Estes são os componentes criados de acordo com os requisitos da aplicação

### ArtistasLista.js
`frontend\src\ArtistasLista.js`  
Componente responsável por listar todos os artistas
### ArtistaDetalhes.js
`frontend\src\ArtistasLista.js`  
Componente responsável por exibir os detalhes de um artista específico, além de permitir a edição e a exclusão
### ArtistasForm.js
`frontend\src\ArtistaForm.js`  
Componente responsável por criar um novo artista

# Testes de API

Testes realizados na API utilizando o Postman

### Teste método GET

<img src="/testes-api/metodo-get.png" alt="Método Get" width="300" height="200">