import React, { useState } from 'react'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import { useSelector } from 'react-redux'

function EditArticle() {
    const { isLoading, articles } = useSelector((state) => state.article)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    return (
        <div className='create'>
            <h1 style={{ textAlign: "center" }}>Edit Article</h1>
            <form action="">
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