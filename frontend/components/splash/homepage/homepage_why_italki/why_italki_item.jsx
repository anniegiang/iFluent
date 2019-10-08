import React from "react";

const WhyItalkiItem = props => {
  const imgDivStyle1 = {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "253px"
  };
  const imgDivStyle2 = {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    background: "white",
    transition: "opacity 0.3s ease 0s",
    opacity: "0"
  };

  const imgStyle = {
    height: "253px",
    width: "253px",
    visibility: "visible"
  };

  return (
    <div className={props.className}>
      <div style={imgDivStyle1}>
        <img src={props.imgUrl} alt="italki-learning" style={imgStyle} />
        <div className={imgDivStyle2}></div>
      </div>
      <h1>
        <span>{props.h1Text}</span>
      </h1>
      <div className="homepage-dividers"></div>
      <p>
        <span>{props.pText}</span>
      </p>
      <div className="homepage-why-italki-gradient"></div>
    </div>
  );
};

export default WhyItalkiItem;
