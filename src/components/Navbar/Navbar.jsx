import React from "react";
import NavImg from "../../assets/logo.png";
import Coin from "../../assets/Currency.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1280px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img src={NavImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-2 border border-slate-200 p-2 rounded-lg">
        <span className="font-bold">60000000</span>
        <span className="font-bold">Coin</span>

        <img src={Coin} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
