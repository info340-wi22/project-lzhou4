<<<<<<< HEAD
=======

>>>>>>> 8ee674238b7f7771031b550a064891d70423c8dc
import React, { useState }from 'react';
import FormCompontent from './form';
import { AboutNav } from './NavBar';
import { foodCard, foodCuisine, foodHeader } from './foodGenre';
import { RestraurantList } from './RestrList';
import { Route, Routes } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Footer } from './Footer.js';


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

<<<<<<< HEAD
    return (
      <div className="App">
        <AboutNav />
        <FormCompontent addForm={addForm}/>
        <RestraurantList />
      </div>
    );
  }

  export default App;
=======
  return (
    <div className="App">
      <FormCompontent addForm={addForm} />
      <RestraurantList />
      
      {/* <RestaurantRanks restaurants={RESTAURANT_LISTINGS}/> */}
      <Routes>
        {/* <Route path='/' element={ } /> */}
      </Routes>
    </div>
  );
}

export default App;
>>>>>>> 8ee674238b7f7771031b550a064891d70423c8dc
