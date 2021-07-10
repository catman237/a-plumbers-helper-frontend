import React from 'react'
import TodoItem from './TodoItem'

const TodoContainer = (props) => {

    const showTodos = () => {
        return props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    }

    return (
            <ul className="todo-list">
              {showTodos()}
            </ul>
    )
}

export default TodoContainer
