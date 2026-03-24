import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const fetchPlayers = async () => {
  const url = "/players.json";
  const fetchRes = await fetch(url);
  const fetchJSON = fetchRes.json();
  return fetchJSON;
};
function App() {
  const playersPromise = fetchPlayers();
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </div>
  );
}

export default App;
