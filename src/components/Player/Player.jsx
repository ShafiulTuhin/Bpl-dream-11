import React from "react";

const Player = ({ player }) => {
  const { player_name } = player;
  return (
    <div>
      <h2>{player_name}</h2>
    </div>
  );
};

export default Player;
