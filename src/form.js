import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";



// 1 prop: 
// addForm: a rest object
export default function FormCompontent(props) {

    let [userInput, setUserInput] = useState({
        inputRestrauant: "",
        inputDescript: "",
        inputDirection: ""
    });
    console.log(userInput);

    const handleChange = (event) => {
        let newValue = event.target.value; // what the user has typed in to the form
        setUserInput({
            [event.target.name]: newValue
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addForm(userInput); // change it to add list callback that render the input values into a list
        setUserInput("")
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="foodGenre">
                    <Form.Label>Food Genre</Form.Label>
                    <Form.Check type="checkbox" label="Mexican" />
                    <Form.Check type="checkbox" label="Italian" />
                    <Form.Check type="checkbox" label="Korean" />
                    <Form.Check type="checkbox" label="Chinese" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="restraurant">
                    <Form.Label>Restraurant Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter restraurant name" name="inputRestrauant" value={userInput.inputRestrauant} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="restraurantDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter restraurant description" name="inputDescript" value={userInput.inputDescript} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="direction">
                    <Form.Label>Restraurant Direction</Form.Label>
                    <Form.Control type="text" placeholder="Enter restraurant direction" name="inputDirection" value={userInput.inputDirection} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}