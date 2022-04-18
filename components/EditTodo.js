import {editTodo, getTodo} from '../services/todos-api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Edit() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id) // get the todo that matches this id
        .then(res => setData(res.data)) //changes state from response from api
    }, []) // square brackets to prevent continuous loop
    
    const editTheTodo = e => {
        e.preventDefault()
        const updatedTodo = {description: e.target.description.value, complete: e.target.complete.checked}
        editTodo(id,updatedTodo)
        nav(`/${id}`)
    }
    return(
        <div>
            <h1>Edit Todo</h1>
            <form onSubmit={editTheTodo}>
                <input type='text' name='description' defaultValue={data.description}/>
                Complete: <input type='checkbox' name='complete' defaultChecked={data.complete} />
                <input type='submit' />
            </form>
        </div>
    )
}