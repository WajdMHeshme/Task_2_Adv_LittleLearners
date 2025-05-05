import React from "react";
import StartSection from "../../components/startSection/StartSection";
import Acards from "../../components/academicCards/Acards";
import Students from "../../components/students/Students";
import Gallery from "../../components/gallery/Gallery";
const Academics = () => {
  return (
    <>
      <StartSection
        title={"Academics"}
        mainTitle={"Nurturing Young Minds for Success"}
        paragraph={
          "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        }
      />
      <Acards />
      <Students />
      <Gallery />
    </>
  );
};

export default Academics;
