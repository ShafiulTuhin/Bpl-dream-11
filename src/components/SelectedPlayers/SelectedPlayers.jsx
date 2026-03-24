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
    toast.success(`${player.player_name} deleted successfully`, {
      position: "bottom-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <>
      {selectedPlayers.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="font-semibold text-xl text-slate-700 mb-4">
            No Player is selected
          </h2>
          <p className="text-slate-400">
            Please select player from available Tab
          </p>
        </div>
      ) : (
        <div className="mt-5 px-4 lg:px-0">
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
