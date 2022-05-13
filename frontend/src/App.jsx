import AddRubbish from "@pages/AddRubbish.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Map from "./pages/Map";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="map" element={<Map />}></Route>
            <Route path="addlocation" element={<AddRubbish />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
