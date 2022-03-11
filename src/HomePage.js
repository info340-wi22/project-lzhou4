import React from 'react';
import FOODS from './data/foods.json'

// origin: card object
function FoodCard(props) {
    return (
        <div className="col-md-6 col-xl-4 d-flex">
            <div className="card mb-4">
                <img src={props.origin.img} className="card-img" alt="{props.origin.country} Food" width="500px" height="300px" />
                <div className="card-body mr-2">
                    <h1 className="card-title">{props.origin.country}</h1>
                </div>
            </div>
        </div>
    )
}

// 
export function HomePage() {
    let FoodArray = FOODS.map((elem) => {
        return <FoodCard key={elem.country} origin={elem}/>
    })
    return (
        <div className="container-fluid">
            {/* <!-- Food Genre heading --> */}
            <div className="row">
                <div className="col">
                    <section className='about'> 
                        <h1>What is Moody Foodies?</h1>
                        <p>Moody Foodie is a platform to explore different Genre of Food all around the world and to make your own list for favorite cuisines</p>
                    </section>
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