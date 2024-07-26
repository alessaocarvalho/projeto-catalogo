# Projeto Gestão de Catálogo

Este projeto busca viabilizar de forma eficaz a gestão de um catálogo musical. O objetivo é que com esta aplicação seja possível listar, adicionar, editar e deletar artistas em uma interface intuitiva.

## Tecnologias Utilizadas

Durante o desenvolvimento desta aplicação, foram utilizadas as seguintes tecnologias:

| Tecnologia             | Uso                    |
|------------------------|------------------------|
| Django                 | Framework backend      |
| Django Rest Framework  | Construção da API      |
| React JS               | Framework frontend     |
| Postman                | Testes de API          |
| VS Code                | Ambiente de desenvolvimento |

## Requisitos

* CRUD para artistas
* Tela para listar artistas
* Tela de detalhes/edição/remoção de artistas
* Tela para criação de artistas

## Estrutura de Pastas

Abaixo está a estrutura de pastas do projeto:

````plaintext
projeto-catalogo/
├── backend/
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   ├── catalog/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── views.py
│   ├── manage.py
│   ├── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── css/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── ArtistaDetalhes.js
│   │   ├── ArtistaForm.js
│   │   ├── ArtistasLista.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
├── testes-api/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
````

## Instalação

### Backend

Utilize um terminal para executar os passos abaixo:

1. **Clonagem do repositório**
    ```sh
    git clone https://github.com/alessaocarvalho/projeto-catalogo/
    ```

2. **Configuração do ambiente virtual**
    ```sh
    python -m venv venv
    venv\Scripts\activate
    ```

3. **Instalação das dependências**
    ```sh
    cd backend
    pip install -r requirements.txt
    ```

4. **Configuração do banco de dados**
    ```sh
    python manage.py makemigrations
    python manage.py migrate
    ```

5. **Execução do servidor**
    ```sh
    python manage.py runserver
    ```

### Frontend

Utilize um terminal para executar os passos abaixo:

1. **Navegação ao diretório frontend**
    ```sh
    cd frontend
    ```

2. **Instalação das dependências**
    ```sh
    npm install
    ```

3. **Execução do servidor**
    ```sh
    npm start
    ```

## Uso

* **Aplicação React**: `http://localhost:3000`
* **API do backend**: `http://localhost:8000/api/`

## Endpoints da API

Endpoints da API e suas funcionalidades:

| Endpoint              | Uso                                   |
|-----------------------|---------------------------------------|
| `GET /api/artistas/`  | Obter uma lista de todos os artistas  |
| `POST /api/artistas/` | Criar um novo artista                 |
| `GET /api/artistas/{id}/` | Obter detalhes de um artista específico |
| `PUT /api/artistas/{id}/` | Atualizar um artista               |
| `DELETE /api/artistas/{id}/` | Deletar um artista             |

## Componentes do Frontend

Estes são os componentes criados de acordo com os requisitos da aplicação:

### ArtistasLista.js

| Caminho                       | Descrição                                      |
|-------------------------------|------------------------------------------------|
| `frontend\src\ArtistasLista.js` | Componente responsável por listar todos os artistas |

### ArtistaDetalhes.js

| Caminho                           | Descrição                                             |
|-----------------------------------|-------------------------------------------------------|
| `frontend\src\ArtistaDetalhes.js` | Componente responsável por exibir os detalhes de um artista específico, além de permitir a edição e a exclusão |

### ArtistaForm.js

| Caminho                      | Descrição                                   |
|------------------------------|---------------------------------------------|
| `frontend\src\ArtistaForm.js` | Componente responsável por criar um novo artista |

## Testes de API

Testes realizados na API utilizando o Postman:

| Método     | Evidência de Teste |
|------------|--------------------|
| **GET**    | ![Método GET](/testes-api/metodo-get.png) |
| **POST**   | ![Método POST](/testes-api/metodo-post.png) |
| **PUT**    | ![Método PUT](/testes-api/metodo-put.png) |
| **DELETE** | ![Método DELETE](/testes-api/metodo-delete.png) |
