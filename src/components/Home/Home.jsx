import React from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="left-side">
          <input type="text" className='search-input'/>
          <button className='search-btn'>Search</button>
          <div className="players-container">
            <Players></Players>
          </div>
        </div>
        <div className="ride-side">
           <div className="cart">
            <p>This is player card</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;