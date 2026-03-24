import React from "react";
import NavImg from "../../assets/logo.png";
import Coin from "../../assets/Currency.png";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="text-xl">
          <img src={NavImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-2 border border-slate-200 p-2 rounded-lg">
        <span className="font-bold">{coin}</span>
        <span className="font-bold">Coin</span>

        <img src={Coin} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
