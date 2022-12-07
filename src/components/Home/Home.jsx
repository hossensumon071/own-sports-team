import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  // const handleSearch = (e) => {
  //   setSearch(e.target.value)
  // }
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
    .then(res => res.json())
    .then(data => setPlayers(data?.player))
  }, [search])
  return (
    <div>
      <div className="home-container">
        <div className="left-side">
          <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input'/>
          <button className='search-btn'>Search</button>
          <div className="players-container">
            <Players players={players}></Players>
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