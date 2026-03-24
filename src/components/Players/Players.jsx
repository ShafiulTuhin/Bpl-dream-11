import React, { Suspense, use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  return (
    <>
      <div className="flex justify-between items-center mt-5  px-4">
        {selectedType === "available" ? (
          <h2 className="font-bold lg:text-2xl">Available Players</h2>
        ) : (
          <h2 className="font-bold lg:text-2xl">
            Selected Players ({`1 of ${players.length}`})
          </h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn 
            ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-slate-200"} rounded-r-none rounded-l-xl`}
          >
            Available ({players.length})
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-slate-200"} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>
      <div>
        {selectedType === "available" ? (
          <Suspense fallback={<h3>Loading...</h3>}>
            <AvailablePlayers players={players}></AvailablePlayers>
          </Suspense>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>
    </>
  );
};

export default Players;
