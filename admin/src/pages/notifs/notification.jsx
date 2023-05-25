import Sidebar from "../../Components/SideBar/Sidebar.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import "./notif.scss"
import Widget from "../../Components/widget/widget.jsx"

import { Link } from "react-router-dom"




const Notifs = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="notifContainer">
            <p> There is no notification for the moment </p>
          </div>
         
        
        </div>
      </div>
    );
  };
  
  export default Notifs;