import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ToolItem from './ToolItem'

const ToolsContainer = (props) => {

    const showTools = () => {
        return props.tools.map(tool => <ToolItem key={tool.id} tool={tool} removeTool={props.removeTool}/>)
    }

    return (
        <ul className='list'>
            {showTools()}
        </ul>
    )
}

export default ToolsContainer
