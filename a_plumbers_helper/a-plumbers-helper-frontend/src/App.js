import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import JobsContainer from './components/JobsContainer';
import ToolsContainer from './components/ToolsContainer';
import JobForm from './components/JobForm';
import './App.css';


function App() {

const jobsURL = 'http://localhost:3000/jobs'
const toolsURL = 'http://localhost:3000/tools'
  
const [jobs, setjobs] = useState([])
const [tools, setTools] = useState([])

useEffect(() => {
  fetch(jobsURL)
  .then(res => res.json())
  .then(jobs => setjobs(jobs))
}, [])

useEffect(() => {
  fetch(toolsURL)
  .then(res => res.json())
  .then(tools => setTools(tools))
}, [])

  return (
    <div className="App">
      <NavBar />
      <JobsContainer jobs={jobs}/>
      <ToolsContainer tools={tools}/>
      <JobForm />
    </div>
  );
}

export default App;