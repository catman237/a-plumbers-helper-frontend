import React from 'react'

const ToolItem = (props) => {
    return (
       <li className='item'>
           <h2>{props.tool.name}</h2>
           <h3>{props.tool.brand}</h3>
           <p>{`Use: ${props.tool.use}`}</p>
       </li>
    )
}

export default ToolItem
