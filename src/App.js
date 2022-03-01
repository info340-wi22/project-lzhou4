
// import NavBar from "./components/Navbar/Navbar";
import React, { useState }from 'react';
import FormCompontent from './form';
import RestaurantRanks from "./RestaurantList";
import { RestraurantList } from './RestrList';
import { Route, Routes } from 'react-router-dom';
import RESTAURANT_LISTINGS from './data/restaurant_listings.json';

function App() {

  const addForm = (restraurantName, restraurantDescript, restraurantDirection) => {
    const newRestr = {
      inputRestrauant: restraurantName,
      inputDescript: restraurantDescript,
      inputDirection: restraurantDirection,
    }
    return newRestr;
    // setInput(newRestr)
  }

  // define function addForm pass as a prop to FormCompontent

  return (
    <div className="App">
      <FormCompontent addForm={addForm} />
      <RestraurantList />
      <RestaurantRanks restaurants={RESTAURANT_LISTINGS}/>
      <Routes>
        {/* <Route path='/' element={ } /> */}
      </Routes>
    </div>
  );
}

export default App;
