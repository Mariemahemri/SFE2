import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed,faPlane,faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext.js"
import {SearchContext} from "../../Context/SearchContext.js"
import { Link } from "react-router-dom";


const Header =({ type })=>{
    const [destination, setDestination] = useState("");
    const [dates,setDates]= useState([
       {
        startDate: new Date(),
        endDate : new Date(),
        key : "selection",},
    ]);
    const [openDate,setOpenDate]=useState(false);
    const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1,

    });
    const [openOption,setOpenOption]=useState(false);
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };

      const navigate =useNavigate();
      const {user}=useContext(AuthContext);
      const {dispatch}=useContext(SearchContext);

      const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/hotels", { state: { destination, dates, options } });
      };


    return (
        <div className="header">
             <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
            <div className="headerList" >
            <Link to="/" className="custom-link"> <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>   Stays</span>
                    </div>
                </Link>
            <Link to="/flights" className="custom-link"><div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
                <span>  Flights</span>
                </div></Link>
            
             <Link to="/carrental" className="custom-link"><div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>  Car rentals</span>
            </div></Link>
            
            <Link to="/attraction" className="custom-link"> <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>   Attractions</span>
            </div></Link>
             </div>
             {type !== "list" && (
                 <>
                    <div>
                        <h1 className="headerTitle">
                        A lifetime of discounts? It's Genius.
                        </h1>
                    <p className="headerDesc">
                        Get rewarded for your travels – unlock instant savings of 10% or
                        more with a free Lamabooking account
                    </p>
                    {!user && <Link to="/login" ><button className="headerBtn">Sign in / Register</button></Link>}
                    </div> 
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input type="text" placeholder="where are you going ?" className="headerSearchInput" onChange={(e) => setDestination(e.target.value)}/>
                            </div>
                        
                            <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                        dates[0].endDate,
                        "MM/dd/yyyy"
                        )}`}</span>
                            {openDate && <DateRange editableDateInputs={true} onChange={item =>setDates([item.selection])} 
                            moveRangeOnFirstSelection = {false} ranges={dates} className="date"
                            />}
                            </div>
                        
                            <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                            <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                                {openOption && (
                                <div className="options">
                                    <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button
                                        disabled={options.adult <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "d")}
                                        >
                                        -
                                        </button>
                                        <span className="optionCounterNumber">
                                        {options.adult}
                                        </span>
                                        <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "i")}
                                        >
                                        +
                                        </button>
                                    </div>
                                    </div>
                                    <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button
                                        disabled={options.children <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "d")}
                                        >
                                        -
                                        </button>
                                        <span className="optionCounterNumber">
                                        {options.children}
                                        </span>
                                        <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "i")}
                                        >
                                        +
                                        </button>
                                    </div>
                                    </div>
                                    <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button
                                        disabled={options.room <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "d")}
                                        >
                                        -
                                        </button>
                                        <span className="optionCounterNumber">
                                        {options.room}
                                        </span>
                                        <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "i")}
                                        >
                                        +
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                )}   
                    </div>
                    <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}> Search</button>
                            </div>
                        </div>
            </> )}       
            </div>    
            
        
        </div>
       
    );
};
export default Header;