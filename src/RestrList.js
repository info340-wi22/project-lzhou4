import React, { useState } from 'react';
import RESTAURANT_LISTINGS from './data/restaurant_listings.json';


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
// restraurant: the restraurant object
export function RestraurantList() {
    // const SAMPLE_RESTRAURANTS = [
    //     { restrName: "Korean Tofu House", restrDescrp: "Korean Tofu House has the best side dishes!!! And the dishes all taste so good! It's my go-to place when I feel like eating Korean food.", restrDir: "https://www.google.com/maps/place/Korean+Tofu+House/@47.6582152,-122.3162557,17z/data=!3m1!4b1!4m5!3m4!1s0x549014f49fa80a91:0xadb81f75121380e8!8m2!3d47.6582152!4d-122.314067", restrImg: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" },
    //     { restrName: "The BoB", restrDescrp: "The BoB have very good side dishes as well, but the wait time there is a bit longer. I LOVE their spicy pork bone soup and bibimbap!", restrDir: "https://www.google.com/maps/place/the+BoB/@47.6577819,-122.3157048,17z/data=!3m1!4b1!4m5!3m4!1s0x549014f35c33f1ef:0xe66019b273c48ceb!8m2!3d47.6577802!4d-122.3133803", restrImg: "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2019/02/korean-dumpling-hot-pot-2.jpg?fit=1300%2C732&ssl=1" },
    //     { restrName: "Chi Mac", restrDescrp: "The fried chicken at Chi Mac is THE BEST!!! I absolutely love the snow flavor, other flavors are good too! Their fried rice and cheese corn are also very delicious. Also love their radish that goes with the chicken!", restrDir: "https://www.google.com/maps/place/Chi+Mac+-+Seattle/@47.6620804,-122.3156315,17z/data=!3m1!4b1!4m5!3m4!1s0x5490148aec6f0161:0x6a35942c285855ea!8m2!3d47.6620804!4d-122.3134428", restrImg: "https://images.dailyhive.com/20200214121159/71598897_381612379458979_9001795591640206581_n-1.jpg" }
    // ]

    // make restraurants array
    let restrListArray = RESTAURANT_LISTINGS.map((elem) => {
        return <Restr key={elem.restrName} restraurant={elem} />
    })

    return (
        <div className="container-fluid">
            {restrListArray}
        </div>
    )
}

