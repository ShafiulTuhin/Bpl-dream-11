import Player from "../Player/Player";

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 px-5 gap-4">
      {players.map((player, index) => (
        <Player
          key={index}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
