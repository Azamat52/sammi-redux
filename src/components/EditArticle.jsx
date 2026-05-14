import React, { useState } from 'react'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Articles from '../services/Articles'

function EditArticle() {
    const { isLoading, articleDetail } = useSelector((state) => state.article)
    const [title, setTitle] = useState(articleDetail.title)
    const [description, setDescription] = useState(articleDetail.description)
    const [body, setBody] = useState(articleDetail.body)
    const { slug } = useParams()
    console.log(slug);
    
    const handleEdit = async () => {
        const newArticle = {title, description, body}
        try {
            await Articles.editArticle(newArticle, articleDetail.slug)
        } catch (error) {
            console.log(error.textMessage);
        }
    }
    return (
        <div className='create'>
            <h1 style={{ textAlign: "center" }}>Edit Article</h1>
            <form action="" onSubmit={handleEdit}>
                <Input label={"Title"} value={title} setState={setTitle} />
                <br />
                <Input label={"Description"} value={description} setState={setDescription} />
                <br />
                <TextArea label={"Body"} value={body} setState={setBody} />
                <button type='submit' className='button w-100' disabled={isLoading}>{isLoading ? "Loading..." : "Edit"}</button>
            </form>
        </div>
    )
}

export default EditArticle