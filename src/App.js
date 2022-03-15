import React, { useEffect, useState } from 'react';
import { AboutNav } from './NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer } from './Footer';
import { HomePage } from './HomePage';
import RESTAURANT_LISTINGS from './data/restaurant_listings.json';
import FOODS from './data/foods.json';
import RestaurantListPage from './RestaurantListPage';
import { getDatabase, ref, onValue, push as firebasePush } from 'firebase/database';

function App() {
  const [currentRest, setCurrentRest] = useState(RESTAURANT_LISTINGS);
  const db = getDatabase();
  const dataRef = ref(db, 'restaurantArray');

  useEffect(()=>{
    onValue(dataRef, (snapshot) => {
      const restaurantObject = snapshot.val();
      const resetKeyArray = Object.keys(restaurantObject);
      const restaurantArray = resetKeyArray.map((keyString)=>{
        const whichObject = restaurantObject[keyString];
        whichObject.firebaseKey = keyString;
        return whichObject;
      })
      const newRestArray = [...currentRest, ...restaurantArray];
      // save it to state
      setCurrentRest(newRestArray);
    }) //like an event listener
  },[]);

  const AddRestaurant = (restaurantGenre, restaurantName, restaurantDescript, restaurantImg) => {
    const newRestr = {
      restaurantGenre: restaurantGenre,
      restaurantName: restaurantName,
      restaurantText: restaurantDescript,
      restaurantImg: restaurantImg
    }

    // instead put new restaurant in the database
    firebasePush(dataRef, newRestr)
      .catch((err) => console.log(err))

    const newRestArray = [...currentRest, newRestr];
    setCurrentRest(newRestArray);
  }

  const [displayedData, setDisplayedData] = useState(FOODS);
  function applyFilter(regionName) {
    if (regionName === '') {
      setDisplayedData(FOODS);
    } else {
      setDisplayedData(FOODS.filter(elem => elem.subregion == regionName));
    }
  }

  return (
    <div className="App">
      <AboutNav />
      <Routes>
        <Route path='/' element={<HomePage applyFilterCallback={applyFilter} data={displayedData} />} />
        <Route path='/restaurants/:restGenre' element={<RestaurantListPage RestArray={currentRest} addRest={AddRestaurant} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
