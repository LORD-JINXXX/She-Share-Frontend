import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
