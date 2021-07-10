import React from 'react'

const TodoItem = (props) => {

    return (
     <li className="todo-item">
         <h2>{props.todo.title}</h2>
         <p>{props.todo.content}</p>
     </li>
    )
}

export default TodoItem
