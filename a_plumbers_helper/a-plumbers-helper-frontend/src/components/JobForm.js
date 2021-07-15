import { useState } from 'react'
import { InputGroup, FormControl, Button, ButtonGroup, FormCheck } from 'react-bootstrap'

const JobForm = (props) => {
    const jobsURL = "http://localhost:3000/jobs"
    const toolsURL = "http://localhost:3000/tools"


    const [name, setJobName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [done, setDone] = useState(false)
    const [tool_name, setToolName] = useState('')
    const [brand, setBrand] = useState('')
    const [use, setUse] = useState('')

    const bodyOfJobsReq = { job: { name, price, description, done } }
    const bodyOfToolsReq = { tool: { tool_name, brand, use } }
    const post = "POST"

    const handle_submit = (url, body, method) => {
        const options = {
            "method": method,
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch(url, options)
            .then(resp => resp.json())
            .then(props.onSubmit)
    }

    return (

        <div className='jobFormContainer'>

            <div className="jobsForm">
                <div className="title">
                    <h1>Job Ticket</h1>
                </div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Job Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="JobName"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setJobName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Amount (to the nearest dollar)" onChange={(e) => setPrice(e.target.value)} />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Job Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        onChange={(e) => setDescription(e.target.value)} />
                </InputGroup>

         

                <Button
                    className="submitButton"
                    as="input"
                    type="submit"
                    value="Submit"
                    onClick={() => handle_submit(jobsURL, bodyOfJobsReq, post)} />
            </div>

            <div className="toolsForm">
                <div className="title">
                    <h1>Tool Form</h1>
                </div>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Tool Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="JobName"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setToolName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Brand</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="brand"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Tool Use</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        onChange={(e) => setUse(e.target.value)} />
                </InputGroup>


                <Button
                    className="submitButton"
                    as="input" type="submit"
                    value="Submit"
                    onClick={() => handle_submit(toolsURL, bodyOfToolsReq, post)} />
            </div>
        </div>
    )
}

export default JobForm
