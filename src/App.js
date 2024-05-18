import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const nayokArr = ['shakib khan', 'Bappa Raz', 'Salman Shah']
  return (
    <div className="App">
      <header className="App-header">

        <MovieCounter></MovieCounter>
       <Nayok name={nayokArr[0]} ></Nayok>
        <Nayok name={nayokArr[1]} ></Nayok>
        <Nayok name={nayokArr[2]} ></Nayok>
        <Nayok name="Papa Khan"></Nayok>
        <img src={logo} className="App-logo" alt="logo" />
 
        
          
      </header>
    </div>
  );
}
function Nayok(props){
  
  return(
    <div style={{border:'2px solid white', margin:'10px', padding:'10px 300px', borderRadius:'10px'}} >
      <h3>Nayok: {props.name}</h3>
      <p>Nayok nehi khal nayok hu main</p>
    </div>
  )
}
function MovieCounter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      
    <button onClick={()=>setCount(count+1)} >Add Movie</button>
    <h4>Movies I have done: {count} </h4>
    </div>
  )
}

export default App;
