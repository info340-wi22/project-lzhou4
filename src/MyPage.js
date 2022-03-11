import React from 'react';
import MyLists from './data/MyLists.json'


// origin: card object
function ListCard(props) {
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
export function MyPage(props) {
    let MyListArray = MyLists.map((elem) => {
        return <ListCard key={elem.country} origin={elem}/>
    })
    return (
        <div className="container-fluid">
            {/* <!-- Food Genre heading --> */}
            <div className="row">
                <div className="col">
                    <span className="food-genre">My Lists</span>
                </div>
            </div>

            {/* <!-- row --> */}
            <div className="row card-row">
                {/* <!-- Card 1 --> */}
                {MyListArray}
            </div>
        </div>
    )
}

