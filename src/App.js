import React, { useState } from 'react';
import FormCompontent from './form';
import { AboutNav } from './NavBar';
import { RestraurantList } from './RestrList';
import { Route, Routes } from 'react-router-dom';
import { MyPage } from './MyPage';
import { Footer } from './Footer';
import { HomePage } from './HomePage';
import RESTAURANT_LISTINGS from './data/restaurant_listings.json';
import FOODS from './data/foods.json';


function App(props) {
  // change to represent current rest
  const [currentRest, setCurrentRest] = useState(RESTAURANT_LISTINGS);
  console.log(currentRest);
  const addRestaurant = (restaurantGenre, restraurantName, restraurantDescript) => {
    console.log(restraurantName, restraurantDescript);
    const newRestr = {
      restaurantGenre: restaurantGenre,
      restaurantName: restraurantName,
      restaurantText: restraurantDescript,
      restaurantImg: ""
    }
    const newRestArray = [...currentRest, newRestr];
    setCurrentRest(newRestArray);
  }

  const [displayedData, setDisplayedData] = useState(FOODS.subregion);
  console.log(FOODS.subregion);
  function applyFilter(regionName) {
    if (regionName==='') {
      setDisplayedData(FOODS.subregion);
    } else {
      setDisplayedData(FOODS.subregion.filter(value => value == regionName));
    }
  }

  return (
    <div className="App">
      <AboutNav />
      <Routes>
        <Route path='/' element={<HomePage applyFilterCallback={applyFilter}/>} />
        <Route path=':restGenre' element={<FormCompontent addRest={addRestaurant} RestArray={currentRest}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
