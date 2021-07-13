import React from 'react'
import { Button } from 'react-bootstrap'

const ToolItem = (props) => {
    return (
       <li className='item'>
           <h2>{props.tool.name}</h2>
           <h3>{props.tool.brand}</h3>
           <p>{`Use: ${props.tool.use}`}</p>
           <Button 
           className="bg-danger" 
           id="submitButton" 
           onClick={() => props.removeTool(props.tool)}>Delete</Button>
       </li>
    )
}

export default ToolItem
