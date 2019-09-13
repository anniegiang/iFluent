import React from 'react';
import TeachersSlider from '../slider/teachers_slider';
import WhyItalki from '../why_italki/why_italki';
import Companies from '../why_italki/companies';

const HomePageWhyItalki = props => {

    return (
        <div className="homepage-why-italki">
          <h1 className="why-italki-title"><span>Why ifluent?</span></h1> 
          <WhyItalki />     
          <Companies />
        </div>
    )
};

export default HomePageWhyItalki;