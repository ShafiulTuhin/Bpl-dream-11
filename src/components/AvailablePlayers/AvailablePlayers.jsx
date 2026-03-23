import React, { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 py-10 px-5 gap-4">
      {playersData.map((player, index) => (
        <Player key={index} player={player}></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
