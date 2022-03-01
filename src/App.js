import React, { useState } from 'react';
import FormCompontent from './form';
import { RestraurantList } from './RestrList';
import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        {/* <Route path='/' element={ } /> */}
      </Routes>
    </div>
  );
}

export default App;
