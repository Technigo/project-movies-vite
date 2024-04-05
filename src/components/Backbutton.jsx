import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Backbutton.css"


export const Backbutton = () => {
  let navigate = useNavigate()
  return (
    <>
      <button className="back-button"   onClick={() => navigate(-1)}> <FaArrowLeft /> {}Back</button> 
    </>
);
};




