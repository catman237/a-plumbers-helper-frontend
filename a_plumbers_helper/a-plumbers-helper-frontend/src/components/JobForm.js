import { useState } from 'react'
import { InputGroup, FormControl, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'

const JobForm = (props) => {
    const baseURL = "http://localhost:3000/jobs"


    const [name, setJobName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [done, setDone] = useState(false)
    const [tool, setToolName] = useState('')
    const [brand, setBrand] = useState('')
    const [use, setUse] = useState('')

    const handleSubmit = () => {
        console.log('clicked submit')
        const options = {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ job: { name, price, description, done } })
        }
        fetch(baseURL, options)
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

                <ButtonGroup className="mb-2">
                    <ToggleButton
                        id="toggle-check"
                        type="checkbox"
                        variant="secondary"
                        checked={done}
                        value="done"
                        onChange={(e) => setDone(e.target.checked)}
                    >
                        Done
                    </ToggleButton>
                </ButtonGroup>

                <Button className="submitButton" as="input" type="submit" value="Submit" onClick={() => handleSubmit()} />
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
                        aria-label="JobName"
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


                <Button className="submitButton" as="input" type="submit" value="Submit" onClick={() => handleSubmit()} />
            </div>
        </div>
    )
}

export default JobForm
