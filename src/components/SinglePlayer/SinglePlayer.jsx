import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player}) => {
  const {strNationality, strPlayer, idPlayer, strDescriptionEN, strCutout} = player
  return (
    <div className="card">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <p>{strDescriptionEN}</p>
    </div>
  );
};

export default SinglePlayer;