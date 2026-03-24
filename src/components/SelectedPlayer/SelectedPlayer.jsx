import { Trash2, User } from "lucide-react";

const SelectedPlayer = ({ player, onDelete }) => {
  const { player_image, player_name, player_role } = player;

  return (
    <div className="flex justify-between items-center border-2 border-slate-400 p-2 mb-4 rounded-lg">
      <div className="flex">
        <img
          src={player_image}
          alt={player_image}
          className="w-[50px] h-[50px]"
        />
        <div className="ml-2">
          <div className="flex gap-2 items-center ">
            <User size={20} />
            <span>{player_name}</span>
          </div>
          <p className="ml-7">{player_role}</p>
        </div>
      </div>
      <button
        onClick={() => onDelete(player)}
        className="cursor-pointer text-yellow-500 bg-slate-300 p-2 rounded-lg"
      >
        <Trash2 />
      </button>
    </div>
  );
};

export default SelectedPlayer;
