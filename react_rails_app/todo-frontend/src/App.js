import { useState, useEffect } from 'react'
import TodoContianer from './components/TodoContianer';
import './App.css';

function App() {
  const todosURL = "http://localhost:3000/todos"
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(todosURL)
    .then(res => res.json())
    .then(data => {setTodos(data)})
  },[])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoContianer todos={todos}/>
    </div>
  );
}

export default App;
