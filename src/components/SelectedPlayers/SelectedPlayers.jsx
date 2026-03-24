import React from "react";

import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import { toast } from "react-toastify";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }) => {
  console.log(selectedPlayers);
  const handleDeletePlayer = (playerName) => {
    setSelectedPlayers((prev) =>
      prev.filter(
        (player) => player.player_name !== playerName,
        toast.success(`${playerName} deleted successfully`),
      ),
    );
  };
  return (
    <div className="mt-5 ">
      {selectedPlayers.map((player, index) => (
        <SelectedPlayer
          key={index}
          player={player}
          selectedPlayers={selectedPlayers}
          onDelete={handleDeletePlayer}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
