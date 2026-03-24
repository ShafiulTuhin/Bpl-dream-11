import { Trash2, User } from "lucide-react";
import React from "react";

const SelectedPlayer = ({ player, selectedPlayers, onDelete }) => {
  console.log(selectedPlayers);

  const { player_image, player_name, player_role } = player;

  return (
    <div className="flex justify-between items-center border-2 border-slate-400 p-2 mb-4 rounded-lg">
      <div className="flex  ">
        <img
          src={player_image}
          alt={player_image}
          className="w-[50px] h-[50px]"
        />
        <div>
          <div className="flex gap-2 items-center ">
            <User size={20} />
            <span>{player_name}</span>
          </div>
          <p className="ml-7">{player_role}</p>
        </div>
      </div>
      <button onClick={() => onDelete(player_name)} className="cursor-pointer">
        <Trash2 />
      </button>
    </div>
  );
};

export default SelectedPlayer;
