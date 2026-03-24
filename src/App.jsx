import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const url = "/players.json";
  const fetchRes = await fetch(url);
  const fetchJSON = fetchRes.json();
  return fetchJSON;
};
function App() {
  const [coin, setCoin] = useState("5000000");
  const playersPromise = fetchPlayers();
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
