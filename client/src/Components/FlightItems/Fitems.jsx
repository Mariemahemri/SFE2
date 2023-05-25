import { Link } from "react-router-dom";
import "../SearchItem/SearchItem.css";



const SearchItemF = ({ item }) => {
    return (
      <div className="searchItem">
        
        <div className="siDesc">
          <h1 className="siTitle">{item.origin}</h1>
          <span className="checkIn">{item.checkIn}</span>
          <h1 className="siTitle">{item.destination}</h1>
          <span className="checkOut">{item.checkOut}</span>
          <span className="siTaxiOp">Free airport taxi</span>
          
          
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        
          <div className="siDetailTexts">
            <span className="siPrice">${item.price}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      
    );
  };
  
  export default SearchItemF; 