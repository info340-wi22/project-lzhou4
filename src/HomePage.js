import React, { useState } from 'react';
import FOODS from './data/foods.json';
import { Link } from 'react-router-dom';


// origin: card object
function FoodCard(props) {
    return (
        <div className="col-md-6 col-xl-4 d-flex">
            <div className="card mb-4">
                <img src={props.origin.img} className="card-img" alt="{props.origin.country} Food" width="500px" height="300px" />
                <div className="card-body mr-2">
                    <h1 className="card-title">
                        <Link to={'/' + props.origin.country}>
                            {props.origin.country}
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}


export function HomePage(props) {
    const [regionSelected, setregionSelected] = useState('');
    function regionSelectChangeCallBack(event) {
        setregionSelected(event.target.value);
    }

    function clickHandler(event) {
        props.applyFilterCallback(regionSelected);
    }

    // foods array
    const optionElems = FOODS.map((regionName) => {
        return <option key={regionName.country} value={regionName.subregion}>{regionName.subregion}</option>
    })

    let FoodArray = FOODS.map((elem) => {
        return <FoodCard key={elem.country} origin={elem} />
    })
    return (
        <div className="container-fluid">
            {/* filter form */}
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                    <select id="regionSelect" className="form-select" value={regionSelected} onChange={regionSelectChangeCallBack}>
                        <option value="">Show all sub-regions</option>
                        {optionElems}
                    </select>
                </div>
                <div className="col-auto">
                    <button id="submitButton" type="submit" className="btn btn-warning" onClick={clickHandler}>Apply Filter</button>
                </div>
            </div>
            {/* <!-- Food Genre heading --> */}
            <div className="row">
                <div className="col">
                    <span className="food-genre">Food Genre</span>
                </div>
            </div>

            {/* <!-- row --> */}
            <div className="row card-row">
                {/* <!-- Card 1 --> */}
                {FoodArray}
            </div>
        </div>
    )
}