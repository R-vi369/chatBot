import "./main.scss";
import P_bot from "../../assets/p_bot.jpg";
import { SlCompass } from "react-icons/sl";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegMessage } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";

import { LuImagePlus } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";
import { PiArrowCircleRightLight } from "react-icons/pi";

const Main = () => {
  return (
    // main
    <div className="main">
      {/* nav */}
      <div className="nav">
        <p>ChatBot</p>
        <img src={P_bot} alt="" />
      </div>

      {/* main container */}

      <div className="main_container">
        {/* greet */}
        <div className="greet">
          <p>
            <span>Hello, Nerd.</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        {/* cards */}
        <div className="cards">
          <div className="card">
            <p>suggest beautify place to see on an upcoming road trip</p>
            <span className="main_icon">
              <SlCompass />
            </span>
          </div>
          <div className="card">
            <p>breifly summarize this concept: urban planning</p>
            <span className="main_icon">
              <HiOutlineLightBulb />
            </span>
          </div>
          <div className="card">
            <p>Brainstrom team bonding activites for our work retreat</p>
            <span className="main_icon">
              <FaRegMessage />
            </span>
          </div>
          <div className="card">
            <p>improve the readablity of the code</p>
            <span className="main_icon">
              <IoCode />
            </span>
          </div>
        </div>
        {/* main_bottom */}
        <div className="main_bottom">
          <div className="search_box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <span className="main_bottom_icon">
                <LuImagePlus />
              </span>
              <span className="main_bottom_icon">
                {" "}
                <IoMicOutline />
              </span>
              <span className="main_bottom_icon">
                <PiArrowCircleRightLight />
              </span>
            </div>
          </div>
          <p className="bottom_info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            temporibus ad. Rem ut ratione iusto placeat perspiciatis 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
