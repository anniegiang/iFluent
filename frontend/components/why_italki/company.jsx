import React from 'react';

const Company = props => {
    const companyStyle1 = {
      position: "relative", 
      overflow: "hidden", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "17px",
    }

    const companyStyle2 = {
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
    height: "17px",
    visibility: "visible"
  };

  return (
    <li>
      <div className={companyStyle1}>
        <img style={imgStyle} src={props.imgUrl} alt={props.alt}/>
        <div className={companyStyle2}></div>
      </div>
    </li>
  )
}

export default Company;