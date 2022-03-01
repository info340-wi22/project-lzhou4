import React, { useState }from 'react';
import FormCompontent from './form';
import { AboutNav } from './NavBar';
import { foodCard, foodCuisine, foodHeader } from './foodGenre';
import { RestraurantList } from './RestrList';


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
        <AboutNav />
        <FormCompontent addForm={addForm}/>
        <RestraurantList />
      </div>
    );
  }

  export default App;
