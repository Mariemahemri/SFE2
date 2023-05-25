import Sidebar from "../../Components/SideBar/Sidebar.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Datatable from "../../Components/datatable/datatable.jsx"
import "./list.scss";


const List = ({columns}) => {
    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable columns={columns}/>
        </div>
      </div>
    )
  }
  
  export default List;