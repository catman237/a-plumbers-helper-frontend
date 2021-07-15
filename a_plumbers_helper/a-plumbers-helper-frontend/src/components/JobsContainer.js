import React from 'react'
import JobItem from './JobItem'

const JobsContainer = (props) => {

const showJobs = () => {
    return props.jobs.map(job => <JobItem key={job.id} job={job} removeJob={props.removeJob} completeJob={props.completeJob}/> )
}

    return (
        <ul className='list'>
            {showJobs()}
        </ul>
    )
}

export default JobsContainer
