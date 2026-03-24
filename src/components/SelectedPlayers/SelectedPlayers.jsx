import React from "react";
import Player from "../Player/Player";

const SelectedPlayers = ({ selectedPlayers }) => {
  console.log(selectedPlayers);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 px-5 gap-4">
      {selectedPlayers.map((player, index) => (
        <Player key={index} player={player}></Player>
      ))}
    </div>
  );
};

export default SelectedPlayers;
