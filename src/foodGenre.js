import React, { useState } from "react";
import FOODS from './foods.json';

export function foodHeader() {
    return (
            <div className="row">
                <div className="col">
                    <span className="food-genre">Food Genre</span>
                </div>
            </div>
    );
}

export function foodCuisine(Props) {
    let displayFood = '';
    return (
        // <!-- row -->
                <div className="row card-row">
                    {/* <!-- Card 1 --> */}
                    <div className="col-md-6 col-xl-4 d-flex">
                        <div className="card mb-4" src={props.foods.img} alt={props.foods.name}>
                            <div className="card-body mr-2">
                                <h1 className="card-title">{props.foods.country}</h1>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

