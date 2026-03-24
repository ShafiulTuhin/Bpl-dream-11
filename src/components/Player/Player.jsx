import { Flag, User } from "lucide-react";
import React from "react";

const Player = ({ player }) => {
  const {
    player_image,
    player_name,
    country,
    player_role,
    rating,
    batting_style,
    bowling_style,
    price,
  } = player;
  return (
    <div className="md:w-[376px] w-full border border-slate-200 p-3 rounded-lg bg-slate-200 ">
      <img
        src={player_image}
        alt={player_image}
        className="w-full h-[300px] rounded-lg"
      />
      <div className="flex items-center gap-4">
        <span>
          <User size={24} />
        </span>
        <h2 className="font-semibold text-[#131313] text-[20px] py-3">
          {player_name}
        </h2>
      </div>
      <div className="flex justify-between items-center border-b-1 border-slate-300 pb-4">
        <div className="flex gap-4 items-center justify-center">
          <Flag />
          <span className="text-[#797979] ">{country}</span>
        </div>
        <h2 className="bg-slate-200 px-5 py-2 rounded-lg">{player_role}</h2>
      </div>
      <div className="flex justify-between items-center pt-5 font-bold">
        <h2 className="">Rating</h2>
        <span>{rating} </span>
      </div>
      <div className="flex justify-between items-center py-3">
        <p>{batting_style}</p>
        <p>{bowling_style}</p>
      </div>
      <div className="flex justify-between items-center">
        <h2>
          Price: <span>{price}</span>
        </h2>
        <button className="btn bg-slate-100">Choose Player</button>
      </div>
    </div>
  );
};

export default Player;
