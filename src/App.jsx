// import React from 'react';
import { useState } from 'react';
import './App.css';
import data from './assets/data';
import Tours from './component/Tours';


const App = () => {
  const [tours, setTours] = useState(data)

  // let tours = Data;
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0 ){
    return (
        <div className="container mx-auto">
          <h2 className='text-3xl py-5 '>No Tours Left</h2>
          <button className='bg-purple-300 hover:bg-purple-800 hover:text-white transition duration-500' onClick={() => setTours(data)}>Refresh</button>
        </div>
    )}
   
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-7xl py-8">Plan With Love</h1>
      <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </>
  )
};

export default App;
