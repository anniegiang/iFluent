import React from "react";
import WhyItalkiItem from "./why_italki_item";

const WhyItalki = props => {
  return (
    <div className="homepage-why-tialki-container">
      <WhyItalkiItem
        className="homepage-why-tialki-learing"
        h1Text="Customized Learning"
        pText="Choose from over 10,000 teachers for 1-on-1 lessons based on your goals and interests."
        imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/illustrations-01.14a9dc27.svg"
      />
      <WhyItalkiItem
        className="homepage-why-tialki-pay"
        h1Text="Pay Per Lesson"
        pText="On italki you only pay per lesson and at the price that meets your budget."
        imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/illustrations-02.e3592c22.svg"
      />
      <WhyItalkiItem
        className="homepage-why-tialki-any"
        h1Text="Anytime, Anywhere"
        pText="Take online lessons at the time and place that suits you"
        imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/illustrations-03.a64719fe.svg"
      />
    </div>
  );
};

export default WhyItalki;
