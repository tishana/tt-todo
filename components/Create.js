import {createTodo} from '../services/todos-api'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const nav = useNavigate()
    const createTheTodo = e => {
        const todo = {description: document.querySelector("#dsc").value, complete: false}
        createTodo(todo)
        nav('/')
    }
    return(
        <div>
            <h1>Create Todo</h1>
            <form onSubmit={createTheTodo}>
                <input type='text' name='description' id='dsc'>
                </input>
                <input type='submit'></input>
            </form>
        </div>
    )
}