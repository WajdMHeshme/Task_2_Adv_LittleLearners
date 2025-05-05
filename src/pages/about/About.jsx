import React from 'react'
import StartSection from '../../components/startSection/StartSection';
import VesMiss from '../../components/visions&mission/VesMiss';
import Awards from '../../components/awards/Awards';
import Team from '../../components/ourTeam/Team';
import History from '../../components/history/History';
import AOS from 'aos'
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // مدة الحركة بالميلي ثانية (اختياري)
        once: true, // الحركة تحدث مرة واحدة فقط أثناء التمرير (اختياري)
      });
    }, []);
  return (
    <>
    <StartSection
    title={"Overview"}
    mainTitle={"Welcome to Little Learners Academy"}
    paragraph={"A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious mindsand building a strong foundation for a lifelong love of learning.Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their fullpotential."} />
    <VesMiss />
    <Awards />
    <History />
    <Team />
    </>
  )
}

export default About
