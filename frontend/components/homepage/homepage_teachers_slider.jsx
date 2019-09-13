import React from 'react';
import TeachersSlider from '../slider/teachers_slider';

const HomePageTeachersSlider = props => {

    return (
      <div>
        <div className="homepage-teachers-slider">
          <TeachersSlider />
        </div>
        <div className="homepage-top-gray"></div>
      </div>
    )
};

export default HomePageTeachersSlider;