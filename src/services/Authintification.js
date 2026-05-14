import api_axios from "./CustomApi"

const Authintification = {
    async CreateUser(user){
        const {data} = await api_axios.post("/users", {user})
        return data
    },
    async LoginUser(user) {
        const {data} = await api_axios.post("/users/login", {user})
        return data
    },
    async GetUser(){
        const {data} = await api_axios.get("/user")
        return data
    }
}

export default Authintification