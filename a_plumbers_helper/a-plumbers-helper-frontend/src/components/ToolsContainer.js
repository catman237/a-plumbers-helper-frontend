import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ToolItem from './ToolItem'

const ToolsContainer = (props) => {

    const showTools = () => {
        return props.tools.map(tool => <ToolItem key={tool.id} tool={tool} removeTool={props.removeTool} />)
    }

    return (
        <div className="tools">
            <ul className='tool-list'>
                {showTools()}
            </ul>
        </div>
    )
}

export default ToolsContainer
