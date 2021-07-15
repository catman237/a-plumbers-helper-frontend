import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import JobsContainer from './components/JobsContainer';
import ToolsContainer from './components/ToolsContainer';
import JobForm from './components/JobForm';
import Footer from './components/Footer';
import './App.css';


function App() {

const jobsURL = 'http://localhost:3000/jobs/'
const toolsURL = 'http://localhost:3000/tools/'
  
const [jobs, setJobs] = useState([])
const [tools, setTools] = useState([])
const [stale, setStale] = useState(false)
const [completedJobs, setCompletedJobs] = useState(0)

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
}, [stale])

const removeJob = (currentJob) => {
  const updatedJob = jobs.filter(job => job.id !== currentJob.id)
  setJobs(updatedJob)
  const options = {
    "method": "DELETE"
  }
  const deletedJob = jobsURL + currentJob.id
  fetch(deletedJob, options)
}

const completeJob = (currentJob) => {
  const newCompletedJobs = completedJobs + 1
  setCompletedJobs(newCompletedJobs)
  const updatedJob = jobs.filter(job => job.id !== currentJob.id)
  setJobs(updatedJob)
  const options = {
    "method": "DELETE"
  }
  const deletedJob = jobsURL + currentJob.id
  fetch(deletedJob, options)
}


const removeTool = (currentTool) => {
  const updatedTools = tools.filter(tool => tool.id !== currentTool.id)
  setTools(updatedTools)
  const options = {
    "method": "DELETE"
  }
  const deletedTool = toolsURL + currentTool.id
  fetch(deletedTool, options)
}





  return (
    <div className="App">
      <NavBar />
      <JobForm onSubmit={() => setStale(true)}/>
      <JobsContainer jobs={jobs} removeJob={removeJob} completeJob={completeJob}/>
      <ToolsContainer tools={tools} removeTool={removeTool}/>
      <Footer />
    </div>
  );
}

export default App;