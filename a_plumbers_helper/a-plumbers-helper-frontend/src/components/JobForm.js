import { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const JobForm = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    return (

        <div className='jobFormContainer'>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Job Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="JobName"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setName(e.target.value)}
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
                <FormControl as="textarea" aria-label="With textarea" onChange={(e) => setDescription(e.target.value)} />
            </InputGroup>

        </div>
    )
}

export default JobForm
