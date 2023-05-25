import axios from "axios";
import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./login.css";
import MailList from "../../Components/mailList/maiList";
import Footer from "../../Components/Footer/footer";


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <header>
       <Link to="/" className="custom-link" >
                  <h1 className="logo" style={{paddingLeft:13, textDecoration:'none'}}>Myuni travels</h1> 
                </Link>
        <div className="social-media">
        <FontAwesomeIcon icon="fa-brands fa-facebook" /> <FontAwesomeIcon icon="fa-brands fa-twitter" /> <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </div>
      </header>
      <div className="login-box">
        <h1 className="login-heading">Login</h1>
        <form className="login-form"> 
          <div>
          <label>Username :</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="login-input"
            /></div>
            <div>
            <label>Password  :</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="login-input"
            /></div>
            <button  onClick={handleClick} className="login-button">
              Login
            </button>
           <p> New member ! <Link to="/register"  className="registre"> Register now </Link> </p>
        </form>
        {error && <span>{error.message}</span>}
      </div>
      <MailList />
      <Footer />
    </div>
    
  );
};

export default Login;