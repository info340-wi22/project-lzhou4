import FormCompontent from "./form";
import { RestraurantList } from "./RestrList";
import { Link } from "react-router-dom";

// 2 props:
// RestArray: array of restaurants
// addRest: callback function that add restaurants
export default function RestaurantListPage(props) {
    const newRestArray = props.RestArray;
    return (
        <div className="subregpage">
            <div>
                <Link to="/"><button className="btn btn-primary m-3" type="submit">Back</button></Link>
                <RestraurantList restaurantArray={newRestArray} />
            </div>
            <div>
                <section className='about'>
                    <h1>
                        Adding a Restaurant
                    </h1>
                    <p>
                        Add a restaurant you discovered by filling out the form
                    </p>
                </section>
                <FormCompontent addRest={props.addRest} />
            </div>
        </div>
    )
}