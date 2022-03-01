//import { NavBar } from './Navigation';
import RestaurantRanks from "./RestaurantList";

import RESTAURANT_LISTINGS from '..data/restaurant_listings.json';
export default function App(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <RestaurantRanks restaurants={RESTAURANT_LISTINGS}/>
        </div>
      </div>
    </div>
  );
}

