import React, { Suspense, use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, coin, setCoin }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <>
      <div className="sm:flex justify-between items-center mt-5  px-4">
        {selectedType === "available" ? (
          <h2 className="font-bold lg:text-2xl sm:text-start text-center sm:mb-0 mb-4">
            Available Players
          </h2>
        ) : (
          <h2 className="font-bold lg:text-2xl sm:text-start text-center sm:mb-0 mb-4">
            Selected Players ({`${selectedPlayers.length} of ${players.length}`}
            )
          </h2>
        )}
        <div className="sm:text-end text-center">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn 
            ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-slate-200"} rounded-r-none rounded-l-xl`}
          >
            Available ({players.length - selectedPlayers.length})
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-slate-200"} rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {selectedType === "available" ? (
          <AvailablePlayers
            players={players}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></SelectedPlayers>
        )}
      </div>
    </>
  );
};

export default Players;
