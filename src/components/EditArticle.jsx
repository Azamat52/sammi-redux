import React, { useEffect, useState } from 'react'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Articles from '../services/Articles'
import { failGetDetail, startGetDetail, succedGetDetail } from '../slice/article'

function EditArticle() {
    const { isLoading, articleDetail } = useSelector((state) => state.article)
    const { loggedIn } = useSelector((state) => state.auth)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const { slug } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Reset = () => {
        setTitle("")
        setDescription("")
        setBody("")
    }

    useEffect(() => {
        const getArticleDetails = async () => {
            dispatch(startGetDetail())
            try {
                const { article } = await Articles.getArticleDetail(slug)
                dispatch(succedGetDetail(article))
                setTitle(article.title)
                setDescription(article.description)
                setBody(article.body)
            } catch (error) {
                dispatch(failGetDetail(error.textMessage))
            }
        }
        getArticleDetails()
    }, [])

    const handleEdit = async (e) => {
        e.preventDefault()
        const newArticle = { title, description, body }
        try {
            await Articles.EditArticle(slug, newArticle)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate("/registar")
        }
    }, [loggedIn])

    return (
        <div className='create fade-page slide-top'>
            <h1 style={{ textAlign: "center" }}>Edit Article</h1>
            <form action="" onSubmit={handleEdit}>
                <Input label={"Title"} value={title} setState={setTitle} />
                <br />
                <Input label={"Description"} value={description} setState={setDescription} />
                <br />
                <TextArea label={"Body"} value={body} setState={setBody} />
                <button type='reset' className='button' onClick={Reset}>Reset</button>
                <button type='submit' className='button' disabled={isLoading}>{isLoading ? "Loading..." : "Edit"}</button>
            </form>
        </div>
    )
}

export default EditArticle