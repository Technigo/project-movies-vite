import { useNavigate } from "react-router-dom";
import "./Backbutton.css"


export const Backbutton = () => {
  let navigate = useNavigate()
  return (
    <>
      <button className="back-button"   onClick={() => navigate(-1)}> ⬅ Back</button> 
    </>
);
};




