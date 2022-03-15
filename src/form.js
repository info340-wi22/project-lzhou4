import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


// 1 prop: 
// addRest: a rest object
export default function FormCompontent(props) {
    const selectedRestGenre = useParams();
    const [inputRestrauant, setInputRestrauant] = useState("");
    const [inputDescript, setInputDescript] = useState("");
    const [imageFile, setImageFile] = useState(undefined)
    let initialURL = '/img/null.png'
    if (props.user && props.user.photoURL) {
        initialURL = props.user.photoURL
    }
    const [imagePreviewUrl, setImagePreviewUrl] = useState(initialURL)

    const handleChange1 = (event) => {
        let newValue = event.target.value; // what the user has typed in to the form
        setInputRestrauant(newValue)
    }
    const handleChange2 = (event) => {
        let newValue = event.target.value; // what the user has typed in to the form
        setInputDescript(newValue)
    }
    //image uploading
    const handleImageChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImagePreviewUrl(URL.createObjectURL(imageFile));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addRest(selectedRestGenre.restGenre, inputRestrauant, inputDescript, imagePreviewUrl); 
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
                {/* image upload */}
                <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
                <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleImageChange} />

                <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
        </div>
    )
}