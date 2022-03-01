import React from "react";
// import React, { useState } from 'react';
import FormCompontent from './form';
// ----------
import RestaurantRanks from "./RestaurantList";
import { RestraurantList } from './RestrList';
import RESTAURANT_LISTINGS from './src/data/RESTAURANT_LISTINGS.json';

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
        <FormCompontent addForm={addForm}/>
        <RestraurantList />
        <RestaurantRanks restaurants={RESTAURANT_LISTINGS}/>
      </div>
    );
  }

  export default App;
