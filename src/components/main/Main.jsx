import "./main.scss";
import P_bot from "../../assets/p_bot.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>ChatBot</p>
        <img src={P_bot} alt="" />
      </div>
      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Bit.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautify place to see on an upcoming road trip</p>
            <img src="" alt="" />
          </div>
          <div className="card">
            <p>suggest beautify place to see on an upcoming road trip</p>
            <img src="" alt="" />
          </div>
          <div className="card">
            <p>suggest beautify place to see on an upcoming road trip</p>
            <img src="" alt="" />
          </div>
          <div className="card">
            <p>suggest beautify place to see on an upcoming road trip</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
