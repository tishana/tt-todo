import {getTodos} from '../services/todos-api'
import {useState, useEffect} from 'react'
import Create from './Create'
export default function Todos() {
 const [todos, setTodos] = useState([])
 useEffect(()=>{
     getTodos()
     .then(res => setTodos(res.data))
 },[])
 console.log(todos)
    return(
    <div>
        <ul>
        {todos.map((todo) => {
            return (
            <li><a href={`/${todo._id}`}>{todo.description}</a>
            </li>
            )
        })}
        
        </ul>
        <Create />
    </div>
)
    
}