import React, { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div>
      {playersData.map((player, index) => (
        <Player key={index} player={player}></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
