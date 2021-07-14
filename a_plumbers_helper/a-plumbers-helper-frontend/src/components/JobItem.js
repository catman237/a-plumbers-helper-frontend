import React from 'react'
import { Button } from 'react-bootstrap'

const JobItem = (props) => {
  return (
    <div>
      <li className='item'>
          <h2 className='title'>{props.job.name}</h2>
        <h3 className='price'>{`Cost $${props.job.price}`}</h3>
        <p className="description">{`${props.job.description}`}</p>
        <Button
          className="bg-danger"
          id="submitButton"
          onClick={() => props.removeJob(props.job)}>Delete</Button>
      </li>
    </div>
  )
}

export default JobItem
