import api_axios from './CustomApi';

const Articles = {
    async getArticle (){
        const {data} = await api_axios.get("/articles")
        return data
    },
    async createArticle (article){
        console.log(article);
        const {data} = await api_axios.post("/articles", {article})
        return data
    }
}

export default Articles