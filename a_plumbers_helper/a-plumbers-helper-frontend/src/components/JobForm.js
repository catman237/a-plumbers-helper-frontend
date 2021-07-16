import { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const JobForm = (props) => {
    const jobsURL = "http://localhost:3000/jobs"
    const toolsURL = "http://localhost:3000/tools"

    const [name, setJobName] = useState('')
    const [price, setPrice] = useState(0)
    const [done, setDone] = useState(false)
    const [description, setDescription] = useState('')
    const [tool_name, setToolName] = useState('')
    const [brand, setBrand] = useState('')
    const [use, setUse] = useState('')

    const bodyOfJobsReq = { job: { name, price, description, done } }
    const bodyOfToolsReq = { tool: { tool_name, brand, use } }
    const post = "POST"

    const jobCallBack = () => {
        setJobName('')
        setPrice(0)
        setDescription('')
    }

    const toolCallBack = () => {
        setToolName('')
        setBrand('')
        setUse('')
    }

    const handle_submit = (url, body, method, callBack) => {
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
            .then(callBack)
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
                        value={name}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price} />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Job Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description} />
                </InputGroup>

                <Button
                    className="submitButton"
                    as="input"
                    type="submit"
                    value="Submit"
                    onClick={() => handle_submit(jobsURL,bodyOfJobsReq,post, jobCallBack())}
                />
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
                        value={tool_name}
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
                        value={brand}
                    />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Tool Use</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        onChange={(e) => setUse(e.target.value)}
                        value={use} />
                </InputGroup>


                <Button
                    className="submitButton"
                    as="input" type="submit"
                    value="Submit"
                    onClick={() => handle_submit(toolsURL, bodyOfToolsReq, post, toolCallBack())}
                />
            </div>
        </div>
    )
}

export default JobForm
