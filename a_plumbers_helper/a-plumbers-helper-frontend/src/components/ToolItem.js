import React from 'react'
import { Button } from 'react-bootstrap'

const ToolItem = (props) => {
    return (
       <li className='item'>
           <h2 className='title'>{`Name: ${props.tool.tool_name}`}</h2>
           <h3 className='brand'>{props.tool.brand}</h3>
           <p className="description">{`Use: ${props.tool.use}`}</p>
           <Button 
           className="bg-danger" 
           id="submitButton" 
           onClick={() => props.removeTool(props.tool)}>Delete</Button>
       </li>
    )
}

export default ToolItem
