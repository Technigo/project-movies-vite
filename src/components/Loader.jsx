import React from "react";
import Lottie from "react-lottie";
import animationLoading from "../assets/AnimationLoading.json";
import "./Loader.css";

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loader-page">
      <div className="loading-animation">
        <Lottie options={defaultOptions} height={120} width={120} />
      </div>
    </div>
  );
};