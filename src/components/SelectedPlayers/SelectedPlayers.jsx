import React from "react";

import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeletePlayer = (player) => {
    setSelectedPlayers((prev) =>
      prev.filter(
        (selectedPlayer) => selectedPlayer.player_name !== player.player_name,
      ),
    );
    setCoin(coin + Number(player.price));
    toast.success(`${player.player_name} deleted successfully`);
  };

  return (
    <>
      {selectedPlayers.length === 0 ? (
        <div className="text-center py-15">
          <h2 className="font-bold text-2xl">No Player is selected</h2>
        </div>
      ) : (
        <div className="mt-5 px-4 lg:px-0">
          {selectedPlayers.map((player, index) => (
            <SelectedPlayer
              key={index}
              player={player}
              onDelete={handleDeletePlayer}
              coin={coin}
              setCoin={setCoin}
            ></SelectedPlayer>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectedPlayers;
