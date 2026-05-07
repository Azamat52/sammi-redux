import React, { useState } from 'react'
import Input from './../ui/Input';
import TextArea from '../ui/TextArea';
import {v4 as id} from "uuid"
import { useDispatch, useSelector } from 'react-redux';
import { failCreate, failLoading, startCreate, startLoading, succedCreate, succedLoading } from '../slice/article';
import Articles from '../services/Articles';
import { useNavigate } from 'react-router';

function CreateArticle() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const isLoading = useSelector((state) => state.article.idLoading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Reset = () => {
        setBody("")
        setDescription("")
        setTitle("")
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        dispatch(startCreate())
        const newArticle = {
            id: id(),
            title: title,
            description: description,
            body: body
        }        
        try {
            Articles.createArticle(newArticle)
            dispatch(succedCreate())
            navigate("/")
        } catch (error) {
            dispatch(failCreate(error.textMessage))
        }
    }

  return (
    <div className='create'>
        <h1 style={{textAlign: "center"}}>Create Your Article</h1>
        <form action="" onSubmit={handleSubmit}>
            <Input label={"Title"} value={title} setState={setTitle}/>
            <br />
            <Input label={"Description"} value={description} setState={setDescription}/>
            <br />
            <TextArea label={"Body"} value={body} setState={setBody}/>
            <button type='reset' className='button' onClick={Reset}>Reset</button>
            <button type='submit' className='button' disabled={isLoading}>Create</button>
        </form>
    </div>
  )
}

export default CreateArticle
