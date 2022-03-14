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
                    <p className="card-title">
                        <Link to={'/' + props.origin.country}>
                            {props.origin.country}
                        </Link>
                    </p>
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

    function clickHandler() {
        props.applyFilterCallback(regionSelected);
    }

    let uniqueSubregion = new Set();
    FOODS.forEach(elem => {
        uniqueSubregion.add(elem.subregion);
    });
    // uniqueSubregion.add(FOODS);
    console.log(uniqueSubregion);
    // foods array
    const optionElems = FOODS.map((regionName) => {
        return <option key={regionName.country} value={regionName.subregion}>{regionName.subregion}</option>
    })

    let FoodArray = props.data.map((elem) => {
        return <FoodCard key={elem.country} origin={elem} />
    })
    return (
        <div className="container-fluid">
            {/* <!-- Food Genre heading --> */}
            <div className="row">
                <div className="col">
                    <section className='about'>
                        <h1>What is Moody Foodies?</h1>
                        <p>Moody Foodies is a platform to explore different Genre of Food all around the world and to make your own list for favorite cuisines</p>
                        </section>
                        <section className='about'>
                        <h1>How to Navigate?</h1>
                        <p>
                            Click a country's cuisine to look at listings of the food and local restaraunts
                        </p>
                        </section>
                        <section className='about'>
                        <h1>
                            Adding a Restaurant
                        </h1>
                        <p>
                            Add a restaurant you discovered by filling out the form
                        </p>
                    </section>
                    <span className="food-genre">Food Genre</span>
                </div>
            </div>
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

            {/* <!-- row --> */}
            <div className="row card-row">
                {/* <!-- Card 1 --> */}
                {FoodArray}
            </div>
        </div>
    )
}