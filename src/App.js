import React, { useState } from 'react';
import FormCompontent from './form';
import { AboutNav } from './NavBar';
import { RestraurantList } from './RestrList';
import { Route, Routes } from 'react-router-dom';
import { MyPage } from './MyPage';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Footer } from './Footer.js';
import { HomePage } from './HomePage';
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


      <AboutNav />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Korean' element={
          <div>
            <RestraurantList key={props.restraurant} />
            
          </div>} />
          <Route path='share' element={<FormCompontent addForm={addForm} />}/>
        <Route path='MyPage' element={<MyPage origin={props.restraurant} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
