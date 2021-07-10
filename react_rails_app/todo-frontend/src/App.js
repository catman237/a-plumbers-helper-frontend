import { useState, useEffect } from 'react'
import TodoContainner from './components/TodoContianer';
import Header from './components/Header';
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
      <Header />
      <TodoContainner todos={todos}/>
    </div>
  );
}

export default App;
