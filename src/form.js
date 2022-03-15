import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


// 1 prop: 
// addForm: a rest object
// RestArray: 
export default function FormCompontent(props) {
    const selectedRestGenre = useParams();
    // const newRestArray = props.RestArray;
    const [inputRestrauant, setInputRestrauant] = useState("");
    const [inputDescript, setInputDescript] = useState("");

    const handleChange1 = (event) => {
        let newValue = event.target.value; // what the user has typed in to the form
        setInputRestrauant(newValue)
    }
    const handleChange2 = (event) => {
        let newValue = event.target.value; // what the user has typed in to the form
        setInputDescript(newValue)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addRest(selectedRestGenre.restGenre, inputRestrauant, inputDescript); // change it to add list callback that render the input values into a list
        setInputRestrauant("");
        setInputDescript("");
    }


    return (
        <div>
            <form className='form-function' onSubmit={handleSubmit} >
                <label className='"nav-item' htmlFor='restaurantName'>Restraurant Name:
                    <input className="form-control mb-3" type="text" id="restaurantName" name="restaurantName" value={inputRestrauant} onChange={handleChange1} />
                </label>
                <label className='nav-item' htmlFor='restaurantDescript'>Restraurant Description:
                    <input className="form-control mb-3" type="text" id="restaurantDescript" name="restaurantDescript" value={inputDescript} onChange={handleChange2} />
                </label>
                {/* add image upload */}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}