import { useContext , useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topBar.css";
import {FcViewDetails} from "react-icons/fc";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const[theme,setTheme] = useState("light-theme");
  const[myMode,setMyMode] = useState(false);

  const toggleTheme = () => {
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
    setMyMode(!myMode);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <FcViewDetails/>
        InfoIn.
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE  
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight"> 
        {user ? (
          <>
          <Link className="link"  to="/settings"> 
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
          <Link href="#" className="btn" onClick= {toggleTheme}>
          {myMode ? "LightMode🌞" : " DarkMode🌚"} 
          </Link>
          </>
          
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
