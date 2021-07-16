import React from 'react'
import { Button } from "react-bootstrap"

const ButtonContainer = (props) => {
    return (
        <div className='buttonContainer'>
            <Button onClick={() => props.toggleJobs()} className='showButton'>Show Jobs</Button>
            <Button onClick={() => props.toggleTools()} className='showButton'>Show Tools</Button>
        </div>
    )
}

export default ButtonContainer
