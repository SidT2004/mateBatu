import React from "react";
import chatHomeLogo from "../../assets/chatHomeLogo.png";
import { useNavigate } from "react-router-dom";

const HomeDesktop = ({ setIsTermsModal }) => {
    const navigate = useNavigate()
    const navigateToChat = () => {
        navigate("/chat")
    }
  return (
    <div className="firstStep">
    
      <h1 >
        <center>
          Random Chatting with Mates across the university
        </center>
      </h1>
      <div>
        <img src={chatHomeLogo}  alt="" />
      </div>

      <button
        onClick={navigateToChat }
        className=""
      >
        Start Chatting
      </button>
    </div>
  );
};

export default HomeDesktop;
