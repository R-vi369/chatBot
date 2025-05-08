// import {assets} from '../../assets/assets'
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { RiChat2Line } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

import "./sidebar.scss";
const sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <p className="menu sidebar_icons" onClick={() => setExtended(prev=> !prev)}>
          <RiMenu4Line />
        </p>
        <div className="new_chat">
          <p className="sidebar_icons">
            <AiOutlinePlus />
          </p>
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent_title">Recent</p>

            <div className="recent_entry"> 
              <p className="sidebar_icons">
                <RiChat2Line />
              </p>
              <p>What is bot ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom_item recent_entry">
          <p className="sidebar_icons">
            {" "}
            <IoIosHelpCircleOutline />
          </p>
          {extended ? <p>Help</p> : null}
       
        </div>

        <div className="bottom_item recent_entry">
          <p className="sidebar_icons">
            {" "}
            <FaClockRotateLeft />
          </p>
          {extended ? <p>Activity</p> : null}
        
        </div>

        <div className="bottom_item recent_entry">
          <p className="sidebar_icons">
            <IoSettingsOutline />
          </p>
          {extended ? <p>Settings</p> : null}
          
        </div>
      </div>
    </div>
  );
};

export default sidebar;
