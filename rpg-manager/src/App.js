import { BrowserRouter,Routes,Route } from "react-router-dom";
import Personage from "./pages/Personage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
