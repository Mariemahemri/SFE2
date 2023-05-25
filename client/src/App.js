import {BrowserRouter , Routes , Route, Router} from "react-router-dom"
import './App.css';
import Home from "./pages/home/home";
import List from "./pages/List/list";
import Hotel from "./pages/hotel/hotels";
import Login from "./pages/login/login.jsx"
import Register from "./pages/register/register.jsx"
import Flights from "./pages/flights/flights";
import CarRental from "./pages/carRentals/car";
import Attraction from "./pages/attraction/attraction";
import ListF from "./pages/flightList/listf";


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<List />} />
              <Route path="/hotels/:id" element={<Hotel />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/listFlight" element={<ListF />} />
              <Route path="/carrental" element={<CarRental />} />
              <Route path="/attraction" element={<Attraction />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

          </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
