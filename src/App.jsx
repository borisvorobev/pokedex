import { Routes, Route } from "react-router-dom";
import "nes.css/css/nes.min.css";
import "./scss/style.scss";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Pokemon />} />
    </Routes>
  );
}
