import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import JobsContainer from './components/JobsContainer';
import ToolsContainer from './components/ToolsContainer';
import JobForm from './components/JobForm';
import './App.css';


function App() {

const jobsURL = 'http://localhost:3000/jobs/'
const toolsURL = 'http://localhost:3000/tools/'
  
const [jobs, setJobs] = useState([])
const [tools, setTools] = useState([])
const [stale, setStale] = useState(true)

useEffect(() => {
  fetch(jobsURL)
  .then(res => res.json())
  .then(jobs => setJobs(jobs))
  .then(setStale(false))
}, [stale])

useEffect(() => {
  fetch(toolsURL)
  .then(res => res.json())
  .then(tools => setTools(tools))
}, [])

const removeJob = (currentJob) => {
  const updatedJob = jobs.filter(job => job.id !== currentJob.id)
  setJobs(updatedJob)
  const options = {
    "method": "DELETE"
  }
  const deletedJob = jobsURL + currentJob.id
  fetch(deletedJob, options)
}


  return (
    <div className="App">
      <NavBar />
      <JobForm onSubmit={() => setStale(true)}/>
      <JobsContainer jobs={jobs} removeJob={removeJob}/>
      <ToolsContainer tools={tools}/>
    </div>
  );
}

export default App;