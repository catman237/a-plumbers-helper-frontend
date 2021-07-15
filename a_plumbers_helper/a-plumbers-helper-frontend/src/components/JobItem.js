import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const JobItem = (props) => {
  console.log(props)
  return (
    <div>
      <li className='item'>
          <h2 className='title'>{props.job.name}</h2>
        <h3 className='price'>{`Cost $${props.job.price}`}</h3>
        <p className="description">{`${props.job.description}`}</p>
        <Button
          className="bg-danger"
          onClick={() => props.removeJob(props.job)}>Cancel</Button>
          <Button
          className="bg-success m-1"
          onClick={() => props.completeJob(props.job)}
          >Completed</Button>
      </li>
    </div>
  )
}

export default JobItem
