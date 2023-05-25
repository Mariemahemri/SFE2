import Sidebar from "../../Components/SideBar/Sidebar.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import "./home.scss"
import Widget from "../../Components/widget/widget.jsx"

import { Link } from "react-router-dom"




const Home = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Link className="customLink" to ="/users" > <Widget type="user" /></Link>
            <Link  className="customLink" to="/hotels"> <Widget type="hotels" /> </Link >
            <Link  className="customLink" to="/rooms" ><Widget type="rooms" /> </Link>
            <Link  className="customLink" to="/reservation" ><Widget type="reservations" /> </Link>
          </div>
         
        
        </div>
      </div>
    );
  };
  
  export default Home;