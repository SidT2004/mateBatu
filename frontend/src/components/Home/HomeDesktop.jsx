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
          Chatting with Mate across the university
      </h1>
      <div>
        <img src={chatHomeLogo}  alt="" />
      </div>

      <button
        onClick={navigateToChat }
        className="startButtonHome"
      >
        Start Talking
      </button>
    </div>
  );
};

export default HomeDesktop;
