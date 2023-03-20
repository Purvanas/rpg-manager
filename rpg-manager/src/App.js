import {Routes,Route } from "react-router-dom";
import Personage from "./pages/Personage"
import Connexion from "./pages/Connexion";
import SelectPersonage from "./pages/SelectPersonage";

function App() {
  return (
      <Routes>
        <Route path="/personage" element={<Personage/>} />
        <Route path="/selectPersonage" element={<SelectPersonage/>} />
        <Route path="/" element={<Connexion/>} />
      </Routes>
  );
}

export default App;
