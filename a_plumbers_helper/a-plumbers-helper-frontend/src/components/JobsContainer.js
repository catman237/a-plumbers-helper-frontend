import React from 'react'
import JobItem from './JobItem'



const JobsContainer = (props) => {

    const showJobs = () => {
        return props.jobs.map(job => <JobItem key={job.id} job={job} removeJob={props.removeJob} completeJob={props.completeJob} />)
    }

    return (
        <div className="jobs">
            <ul className='job-list'>
                {showJobs()}
            </ul>
        </div>
    )
}

export default JobsContainer
