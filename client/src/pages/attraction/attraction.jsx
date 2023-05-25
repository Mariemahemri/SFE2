import React , {useState} from "react";
import Navbar from "../../Components/navbar/navbar";
import Header from "../../Components/Header/header";
import MailList from "../../Components/mailList/maiList";
import Footer from "../../Components/Footer/footer";
import "./attraction.css"

const Attraction =()=>{

    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
  
    const handleDestinationChange = (e) => {
      setDestination(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleSearch = () => {
      // Logique de recherche d'attractions
      console.log('Performing attractions search...');
      console.log('Destination:', destination);
      console.log('Date:', date);
    };
  
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="attractioContainer">
            <h2 className="heading">What do you want to see and do?</h2>
            <p>
            Discover new attractions and experiences to match your interests and travel style
            </p>
      <div>
             <label htmlFor="destination">where are you going ?</label>
                    <input id="destination" className="Finput" type="text" value={destination} onChange={handleDestinationChange} />
                </div>
                <div>
                    <label htmlFor="date">Date :</label>
                    <input id="date" className="Finput" type="date" value={date} onChange={handleDateChange} />
                </div>
                <button className="Search" onClick={handleSearch}>Search</button>
            </div>

           
        </div>
    )

}
export default Attraction;