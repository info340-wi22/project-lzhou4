import React, { useState } from 'react';
import { RestraurantList } from './RestrList';
import { useParams } from 'react-router-dom';
import RESTAURANT_LISTINGS from './data/restaurant_listings.json';


// 1 prop: 
// addForm: a rest object
// RestArray: 
export default function FormCompontent(props) {
    const selectedRestGenre = useParams();
    // const selectedRestGenre.restGenre;
    const newRestArray = props.RestArray;
    // console.log(newRestArray)
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
        console.log("here");
        console.log(inputRestrauant);
        console.log(inputDescript);
        event.preventDefault();
        props.addRest(selectedRestGenre.restGenre, inputRestrauant, inputDescript); // change it to add list callback that render the input values into a list
        setInputRestrauant("");
        setInputDescript("");
    }


    return (
        <div>
            {/* <h1>food genre name</h1>  */}
            <RestraurantList restaurantArray={newRestArray}/>
            <form className='form-function' onSubmit={handleSubmit} >
                <label className='"nav-item'>Restraurant Name:
                    <input className="form-control mb-3" type="text" name="name" value={inputRestrauant} onChange={handleChange1} />
                </label>
                <label className='nav-item'>Restraurant Description:
                    <input className="form-control mb-3" type="text" name="descript" value={inputDescript} onChange={handleChange2} />
                </label>
                {/* add image upload */}
                <button className="btn btn-primary" type="submit">Submit</button> 

            </form>
        </div>
    )
}