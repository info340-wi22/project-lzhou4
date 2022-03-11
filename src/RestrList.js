import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';


// 1 props 
// restraurant: the restraurant object
function Restr(props) {
    return (
        <div className="row restaurant-rank my-5">
            <div className="col-sm-7">
                <img className="food-pic img-fluid"
                    src={props.restraurant.restaurantImg}
                    alt={props.restraurant.restaurantName} aria-label={props.restraurant.restaurantName} />
            </div>
            <div className="col-sm-5">
                <div className="restaurant-summary pt-3 pt-sm-0">
                    <h1 className="d-inline d-sm-block">{props.restraurant.restaurantRank}</h1>
                    <h2 className="d-inline d-sm-block">{props.restraurant.restaurantName}</h2>
                    <p>{props.restraurant.restaurantText}</p>
                </div>
            </div>
        </div>
    )
}

// 1 props 
// restraurant: array of restraurant objects
export function RestraurantList(props) {
    console.log(props.restaurantArray);
    const selectedRestGenre = useParams();
    let restaurants =  props.restaurantArray.filter((elem)=>{
        return elem.restaurantGenre == selectedRestGenre.restGenre;
    }); //find selected rest genre in data
    if(!restaurants) return <h2>No Food Genre specified</h2> //if unspecified
    let restrListArray = restaurants.map((elem) => {
        return <Restr key={elem.restrName} restraurant={elem} />
    })

    return (
        <div className="container-fluid">
            {restrListArray}
        </div>
    )
}

