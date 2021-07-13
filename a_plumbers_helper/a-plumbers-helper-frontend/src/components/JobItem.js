import React from 'react'
import { Button } from 'react-bootstrap'

const JobItem = (props) => {
  return (

    <li className='item'>
      <div className="titleDiv">
        <h2 className='title'>{props.job.name}</h2>
      </div>
      <h3>{`Cost $${props.job.price}`}</h3>
      <p className="description">{`${props.job.description}`}</p>
      <Button className="bg-danger" id="submitButton" onClick={() => props.removeJob(props.job)}>Delete</Button>
    </li>

  )
}

export default JobItem
