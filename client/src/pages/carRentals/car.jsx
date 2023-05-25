import React , {useState} from "react";
import Navbar from "../../Components/navbar/navbar";
import Header from "../../Components/Header/header";
import MailList from "../../Components/mailList/maiList";
import Footer from "../../Components/Footer/footer";
import "./car.css"

const CarRental =()=>{

    const [pickUpLocation, setPickUpLocation] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');
    const [dropOffTime, setDropOffTime] = useState('');

    const handlePickUpLocationChange = (e) => {
        setPickUpLocation(e.target.value);
    };

    const handlePickUpDateChange = (e) => {
        setPickUpDate(e.target.value);
    };

    const handlePickUpTimeChange = (e) => {
        setPickUpTime(e.target.value);
    };

    const handleDropOffDateChange = (e) => {
        setDropOffDate(e.target.value);
    };

    const handleDropOffTimeChange = (e) => {
        setDropOffTime(e.target.value);
    };

    const handleSearch = () => {
        // Logic for car rental search
        console.log('Performing car rental search...');
        console.log('Pick-up Location:', pickUpLocation);
        console.log('Pick-up Date:', pickUpDate);
        console.log('Pick-up Time:', pickUpTime);
        console.log('Drop-off Date:', dropOffDate);
        console.log('Drop-off Time:', dropOffTime);
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="carContainer">
            <h2 className="heading">Car rentals for any kind of trip</h2>
            <p>Great deals at great prices, from the biggest car rental companies</p>
            <div>
                <label >Pick up location:</label>
                <input
                id="pick-up-location"
                className="Finput"
                type="text"
                value={pickUpLocation}
                onChange={handlePickUpLocationChange}
                />
            </div>
            <div>
                <label htmlFor="pick-up-date">Pick-up date :</label>
                <input
                id="pick-up-date"
                className="fdate"
                type="date"
                value={pickUpDate}
                onChange={handlePickUpDateChange}
                />
                <input
                id="pick-up-time"
                type="time"
                className="fdate"
                value={pickUpTime}
                onChange={handlePickUpTimeChange}
                />
            </div>
            <div>       </div>
            <div className="dd"> 
                <label htmlFor="drop-off-date">Drop-off-date :</label>
                <input
                id="drop-off-date"
                type="date"
                className="fdate"
                value={dropOffDate}
                onChange={handleDropOffDateChange}
                />
                <input
                id="drop-off-time"
                type="time"
                className="fdate"
                value={dropOffTime}
                onChange={handleDropOffTimeChange}
                />
            </div>
            <button  className="Search" onClick={handleSearch}>Search</button>
                    </div>

            <MailList />
            <Footer />
        </div>
    )

};
export default CarRental;