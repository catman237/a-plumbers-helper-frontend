import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import JobsContainer from './components/JobsContainer';
import ToolsContainer from './components/ToolsContainer';
import ButtonContainer from './components/ButtonContainer';
import JobForm from './components/JobForm';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap'
import './App.css';

function App() {

const jobsURL = 'http://localhost:3000/jobs/'
const toolsURL = 'http://localhost:3000/tools/'
  
const [jobs, setJobs] = useState([])
const [tools, setTools] = useState([])
const [stale, setStale] = useState(false)
const [completedJobs, setCompletedJobs] = useState(0)
const [showJobs, setShowJobs] = useState(false)
const [showTools, setShowTools] = useState(false)

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

const toggleJobs = () => { setShowJobs(!showJobs)}

const toggleTools = () => { setShowTools(!showTools)}

  return (
    <div className="App">
      <NavBar />
      <JobForm onSubmit={() => setStale(true)}/>
      <ButtonContainer toggleJobs={toggleJobs} toggleTools={toggleTools}/>
      <div className='containers'>
      {showJobs ? <JobsContainer jobs={jobs} removeJob={removeJob} completeJob={completeJob}/> : null}
      {showTools ? <ToolsContainer tools={tools} removeTool={removeTool}/> : null }
      </div>
      <Footer />
    </div>
  );
}

export default App;