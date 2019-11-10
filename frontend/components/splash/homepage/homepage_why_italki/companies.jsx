import React from "react";
import Company from "./company";

const Companies = props => {
  const companyStyle3 = {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "46px"
  };

  const imgStyle3 = {
    height: "46px",
    visibility: "visible"
  };

  return (
    <ul className="homepage-companies">
      <Company
        imgUrl="https://ifluent-dev.s3-us-west-1.amazonaws.com/bbc-778e046f.svg"
        alt="bbc"
      />
      <Company
        imgUrl="https://ifluent-dev.s3-us-west-1.amazonaws.com/business-c2af4635.svg"
        alt="business"
      />
      <Company
        imgUrl="https://ifluent-dev.s3-us-west-1.amazonaws.com/theguardian-770a9aa8.svg"
        alt="theguardian"
      />
      <Company
        imgUrl="https://ifluent-dev.s3-us-west-1.amazonaws.com/tc-a16a0112.svg"
        alt="tc"
      />
      <Company
        imgUrl="https://ifluent-dev.s3-us-west-1.amazonaws.com/quartz-e616e10a.svg"
        alt="quartz"
      />
      <Company
        imgUrl="https://ifluent-dev.s3-us-west-1.amazonaws.com/lifehacker-new-17be92a8.svg"
        alt="lifehacker"
      />
      <li>
        <div className={companyStyle3}>
          <img
            style={imgStyle3}
            src="https://ifluent-dev.s3-us-west-1.amazonaws.com/post-b5d4953a.svg"
            alt="post"
          />
          <div className={companyStyle3}></div>
        </div>
      </li>
    </ul>
  );
};

export default Companies;
