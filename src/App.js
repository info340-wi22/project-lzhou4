
import React, { useState }from 'react';
import FormCompontent from './form';
import { RestraurantList } from './RestrList';
import { Route, Routes } from 'react-router-dom';
import {MyPage} from './MyPage';

function App(props) {
  // define function addForm pass as a prop to FormCompontent
  const addForm = (restraurantName, restraurantDescript, restraurantDirection) => {
    const newRestr = {
      inputRestrauant: restraurantName,
      inputDescript: restraurantDescript,
      inputDirection: restraurantDirection,
    }
    return newRestr;
    // setInput(newRestr)
  }


  return (
    <div className="App">
      <FormCompontent addForm={addForm} />
      <MyPage origin={props.restraurant}/>
      {/* <RestraurantList key={props.restraurant} /> */}
      
      {/* <RestaurantRanks restaurants={RESTAURANT_LISTINGS}/> */}
      <Routes>
        <Route path='Korean' element={<RestraurantList key={props.restraurant} />} />
      </Routes>
    </div>
  );
}

export default App;
