import React from "react";
import HomePageHero from "./homepage_hero/homepage_hero";
import TeachersCarousel from "../../carousel/teachers_carousel";
import HomePageWhyItalki from "./homepage_why_italki/homepage_why_italki";
import HomePageHowItWorks from "./homepage_how_it_works/homepage_how_it_works";
import HomePageStudentSays from "./homepage_student_says/homepage_student_says";
import HomepageBottomBanner from "./homepage_bottom_banner/homepage_bottom_banner";

const HomePage = props => {
  return (
    <div className="flex-container">
      <div className="homepage">
        <HomePageHero />
        <TeachersCarousel />
        <HomePageWhyItalki />
        <HomePageHowItWorks />
        <HomePageStudentSays />
        <HomepageBottomBanner />
      </div>
    </div>
  );
};

export default HomePage;
