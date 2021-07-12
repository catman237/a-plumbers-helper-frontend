import React from 'react'

const JobItem = (props) => {
    return (
      <li className='item'>
          <h2>{props.job.name}</h2>
          <h3>{`Cost $${props.job.price}`}</h3>
          <p>{`Description: ${props.job.description}`}</p>
      </li>
    )
}

export default JobItem
