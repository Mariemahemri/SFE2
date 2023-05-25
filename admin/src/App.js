
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/login.jsx"
import List from "./pages/list/list.jsx"
import Notifs from "./pages/notifs/notification.jsx"
import New from "./pages/new/new.jsx"
import { BrowserRouter,Route,Routes , Navigate } from 'react-router-dom';
import { ResInputs,userInputs } from './formSource';
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext.js";
import { AuthContext } from "./Context/AuthContext";
import { hotelColumns,roomColumns , userColumns , ResColumns} from "./datatablesource";
import NewHotel from "./pages/newHotel/newHotel.jsx";
import NewRoom from "./pages/newRoom/newRomm.jsx";


function App() {

  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };



  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
             <Route
                path="notif"
                element={
                  <ProtectedRoute>
                     <Notifs />
                  </ProtectedRoute>
                }
              />
            <Route path="/reservation">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={ResColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={ResInputs}  title="add new reservation"/>
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
             
            </Route>
            <Route path="/hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
             
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
