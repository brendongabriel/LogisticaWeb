// yarn add axios, biblioteca responsavel por realizar a comunicacao com back end
import axios from "axios";

// instancia o axios com o endereco da api que vai ser utilizada
const api = axios.create ({
    baseURL: "http://localhost:8585"
});

export default api;