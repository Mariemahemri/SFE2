import React , {useState , useContext} from "react";
import Navbar from "../../Components/navbar/navbar";
import Header from "../../Components/Header/header";
import MailList from "../../Components/mailList/maiList";
import Footer from "../../Components/Footer/footer";
import "./flights.css"
import {SearchContext} from "../../Context/SearchContext.js"
import { useNavigate } from "react-router-dom";


const Flights = ()=>{
    const [flightType, setFlightType] = useState('aller-simple');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleFlightTypeChange = (e) => {
    setFlightType(e.target.value);
  };

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const navigate =useNavigate();
  const {dispatch}=useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { origin, destination } });
        navigate("/listFlight", { state: { origin, destination } });
  };
    return (
        <div>
            <Navbar />
            <Header  type="list"/>

            
            <div className="flightContainer">
              <h2 className="flightHeading">Recherche de vols</h2>
              <form className="flight-form">
                <div>
                    <label htmlFor="flight-type">flight type :</label>
                    <select id="flight-type" className="Finput" value={flightType} onChange={handleFlightTypeChange}>
                    <option value="aller-simple">One-way</option>
                    <option value="aller-retour">Round-trip</option>
                    </select>
                </div>
                <div>
                    <label>Origin   :</label>
                    <input id="origin" className="Finput" type="text" value={origin} onChange={handleOriginChange} />
                    <label >Destination:</label>
                    <input id="destination" className="Finput" type="text" value={destination} onChange={handleDestinationChange} />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input id="date" type="date" className="Finput" value={date} onChange={handleDateChange} />
                </div>
                <button  className="Search" onClick={handleSearch}>Search</button>
                </form>
             </div>
            <MailList />
            <Footer />
        </div>
    )
};
export default Flights ;