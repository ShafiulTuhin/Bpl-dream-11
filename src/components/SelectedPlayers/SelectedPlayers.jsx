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
    <>
      {selectedPlayers.length === 0 ? (
        <div className="text-center py-15">
          <h2 className="font-bold text-2xl">No Player is selected</h2>
        </div>
      ) : (
        <div className="mt-5 ">
          {selectedPlayers.map((player, index) => (
            <SelectedPlayer
              key={index}
              player={player}
              onDelete={handleDeletePlayer}
            ></SelectedPlayer>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectedPlayers;
