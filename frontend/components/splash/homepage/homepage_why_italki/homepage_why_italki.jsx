import React from "react";
import WhyItalki from "./why_italki";
import Companies from "./companies";

const HomePageWhyItalki = props => {
  return (
    <div className="homepage-why-italki">
      <h1 className="why-italki-title">
        <span>Why ifluent?</span>
      </h1>
      <WhyItalki />
      <Companies />
    </div>
  );
};

export default HomePageWhyItalki;
