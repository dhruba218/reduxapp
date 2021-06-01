import React from 'react'
import './App.css'
import {useSelector, useDispatch} from "react-redux"
import {incNumber, decNumber } from "./actions/index"



const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();


  return (


      <div class="container">
  
        <h1>Increment/decrement counter</h1>
        <h4>Using React and Redux</h4>
        
        <div class="quantity">
          <a href="#" class="quantity__minus" onClick={  () => dispatch(decNumber())}><span>-</span></a>
          <input name="quantity" type="text" class="quantity__input" value={myState} />
          <a href="#" class="quantity__plus"
          onClick={  () => dispatch(incNumber())}><span>+</span></a>
        </div>
  
      </div>
  )
}

export default App;

