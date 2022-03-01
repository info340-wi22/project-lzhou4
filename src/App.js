<<<<<<< HEAD
import React from "react";
import NavBar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

=======
import React, { useState }from 'react';
import FormCompontent from './form';
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
        <FormCompontent addForm={addForm}/>
        <RestraurantList />
      </div>
    );
  }

  export default App;
>>>>>>> 2cd9236e30560146c8891515a821c23eccc7377a
