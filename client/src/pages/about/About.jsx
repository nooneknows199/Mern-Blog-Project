import "./about.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function About() {
  const [file] = useState(null);

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  
  return (
    <div className="settings">
    <div className="settingsWrapper">
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
          </div>
          <label>Username: </label>
          <h2>{user.username}</h2>

          <label>Email</label>
          <h2>{user.email}</h2>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
