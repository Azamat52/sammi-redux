import api_axios from './CustomApi';

const Articles = {
    async getArticle (){
        const {data} = await api_axios.get("/articles")
        return data
    },
    async createArticle (article){
        const {data} = await api_axios.post("/articles", {article})
        return data
    },
    async deleteArticle(slug){
        const {data} = await api_axios.delete(`/articles/${slug}`)
        return data
    }
}

export default Articles