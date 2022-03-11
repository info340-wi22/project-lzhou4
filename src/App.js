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
  const addRestaurant = (restaurantGenre, restaurantName, restaurantDescript) => {
    console.log(restaurantName, restaurantDescript);
    const newRestr = {
      restaurantGenre: restaurantGenre,
      restaurantName: restaurantName,
      restaurantText: restaurantDescript,
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
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Quicksand:wght@500&family=Raleway:wght@300&family=Sigmar+One&family=Staatliches&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Quicksand:wght@500&family=Raleway:wght@300&family=Staatliches&display=swap" rel="stylesheet"></link>
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
