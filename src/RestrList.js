import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';


// 1 props 
// restaurant: the restaurant object
function Restr(props) {
    return (
        <div className="row restaurant-rank">
            <div className="col-sm-5">
                <img className="food-pic img-fluid my-3"
                    src={props.restaurant.restaurantImg}
                    alt={props.restaurant.restaurantName} aria-label={props.restaurant.restaurantName} />
            </div>
            <div className="col-sm-5">
                <div className="restaurant-summary pt-3 pt-sm-0 my-3">
                    <h1 className="d-inline d-sm-block">{props.restaurant.restaurantRank}</h1>
                    <h2 className="d-inline d-sm-block">{props.restaurant.restaurantName}</h2>
                    <p>{props.restaurant.restaurantText}</p>
                </div>
            </div>
        </div>
    )
}

// 1 props 
// restaurant: array of restaurant objects
export function RestraurantList(props) {
    console.log(props.restaurantArray);
    const selectedRestGenre = useParams();
    let restaurants = props.restaurantArray.filter((elem) => {
        return elem.restaurantGenre == selectedRestGenre.restGenre;
    }); //find selected rest genre in data
    if (!restaurants) return <h2>No Food Genre specified</h2> //if unspecified
    let restrListArray = restaurants.map((elem) => {
        return <Restr key={elem.restrName} restaurant={elem} />
    })

    return (
        <div className="container-fluid">
            {restrListArray}
            <div>
                    <section className='about'>
                        <h1>
                            Adding a Restaurant
                        </h1>
                        <p>
                            Add a restaurant you discovered by filling out the form
                        </p>
                    </section>
                </div>
        </div>
    )
}

