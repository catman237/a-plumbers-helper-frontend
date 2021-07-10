import React from 'react'
import TodoItem from './TodoItem'

const TodoContianer = (props) => {

    const showTodos = () => {
        return props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    }

    return (
        <div>
            <ul>
              {showTodos()}
            </ul>
        </div>
    )
}

export default TodoContianer
