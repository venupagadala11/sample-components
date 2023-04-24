import { useState } from 'react';
import './App.css';
import React from 'react';
import plus from './images/plus.svg';
import minus from './images/minus.svg';
import Slider from '@mui/material/Slider';
import Graph from './Components/Graph/Graph'

function App() {
  const [value, setValue] = useState(20);

  const changeValue = (event, value) => {
    setValue(value);
  };
  const handleDecrease = ()=>
  {
    if(value!==0)
    setValue(value-10);
  }

  const handleIncrease = ()=>
  {
    if(value<100)
    setValue(value+10);
  }

  return (
    <div className='container' >
    {/* <div className='slider-with-divs'>
      <div className='align-icons' onClick={handleDecrease}><img src={minus}/></div>
      <Slider 
        className='slider'
        style={{ width: 300 }}
        min={10}
        max={100}
        step={10}
        value={value}
        marks
        onChange={changeValue}
        valueLabelDisplay="auto"
      />
      <div className='align-icons' onClick={handleIncrease}><img src={plus}/></div>
      </div> */}
      <Graph/>
    </div>
  );
}

  


export default App;


