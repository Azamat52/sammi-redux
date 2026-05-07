import axios from "axios";

const api_axios = axios.create({
    baseURL: "http://localhost:3000/api"
})

export default api_axios