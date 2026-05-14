import axios from "axios";
import { getItem } from "./LocalStorage";

const api_axios = axios.create({
    baseURL: "http://localhost:3000/api"
})

api_axios.interceptors.request.use(config => {
    const token = getItem("token")
    const autharitation = token ? `Token ${token}` : ""
    config.headers.Authorization = autharitation
    return config
    
})

export default api_axios