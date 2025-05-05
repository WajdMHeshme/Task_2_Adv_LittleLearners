import {
  FaGraduationCap,
  FaMaskFace,
  FaArrowRight,
  FaFlag,
} from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import jennefer from "/assets/Profile Container.svg";
import David from "/assets/Profile Container (1).svg";
import Emily from "/assets/Profile Container (2).svg";
import line from "/assets/dollet line.png";
import { BsLightningChargeFill } from "react-icons/bs";
import { SiLevelsdotfyi } from "react-icons/si";
import { PiChartPieSliceFill } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa";

import { FaBookOpen } from "react-icons/fa6";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaSignLanguage } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export const navData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Academics",
    href: "/academics",
  },
  {
    label: "Adimission",
    href: "#adimission",
  },
  {
    label: "Students Life",
    href: "#life",
  },
  {
    label: "Contact",
    href: "#contact",
    state: "contact",
  },
];

export const CardData = [
  {
    icon: <FaGraduationCap />,
    heading: "Holistic Learning Approach",
    paragraph:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    icon: <FaCrown />,
    heading: "Experienced Educators",
    paragraph:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    icon: <FaMaskFace />,
    heading: "Nurturing Environment",
    paragraph:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    icon: <FaFlag />,
    heading: "Play-Based Learning",
    paragraph:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    icon: <IoIosFootball />,
    heading: "Individualized Attention",
    paragraph:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    icon: <RiParentFill />,
    heading: "Parent Involvement",
    paragraph:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

export const TestimonialsData = [
  {
    name: "Jennifer B",
    avatar: jennefer,
    rating: 5,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },

  {
    name: "David K",
    avatar: David,
    rating: 5,
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    name: "Emily L",
    avatar: Emily,
    rating: 5,
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];

export const AccordionData = [
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "What are the school hours at Little Learners Academy?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "Is there a uniform policy for students?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "What extracurricular activities are available for students?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "What extracurricular activities are available for students?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "How do you handle food allergies and dietary restrictions?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "How do you handle discipline and behavior management?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "How do I apply for admission to Little Learners Academy?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
];

export const CardInfoData = [
  {
    heading: "About Us",
    line: line,
    paragraph:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
  {
    heading: "Academics",
    line: line,
    paragraph:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
  {
    heading: "Student Life",
    line: line,
    paragraph:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
  {
    heading: "Admissions",
    line: line,
    paragraph:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
];

export const MissVessCards = [
  {
    title: "Mission",
    icon: "/assets/Iconm.svg",
    pagf: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
  },
  {
    title: "Vision",
    icon: "/assets/Icon.svg",
    pagf: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
  },
];

export const NewSliderData = [
  {
    icon: <PiChartPieSliceFill />,
    heading: "Outstanding Early Childhood Education Awar",
    paragraph:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    icon: <SiLevelsdotfyi />,
    heading: "Innovative STEAM Education Award",
    paragraph:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    icon: <BsLightningChargeFill />,
    heading: "Environmental Stewardship Award",
    paragraph:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];

export const TeamData = [
  {
    img: "/assets/Image (1).png",
    name: "Ms. Sarah Anderson",
    icon: <FaEnvelope />,
    title: "Qualification:Bachelor's Degree in Early Childhood Education",
    mainInf:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    img: "/assets/Image (2).png",
    name: "Mr. David Roberts",
    icon: <FaEnvelope />,
    title: "Qualification: Master's Degree in Elementary Education",
    mainInf:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    img: "/assets/Image (3).png",
    name: "Ms. Emily Hernandez",
    icon: <FaEnvelope />,
    title: "Qualification: Diploma in Child Psychology",
    mainInf:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    img: "/assets/Image (4).png",
    name: "Mr. Michael Turner",
    icon: <FaEnvelope />,
    title: "Qualification: Bachelor's Degree in Physical Education",
    mainInf:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    img: "/assets/Image (5).png",
    name: "Mr. William Parker",
    icon: <FaEnvelope />,
    title: "Qualification: Master's Degree in Special Education",
    mainInf:
      "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    img: "/assets/Image (6).png",
    name: "Ms. Jessica Lee",
    icon: <FaEnvelope />,
    title: "Qualification: Bachelor's Degree in Fine Arts",
    mainInf:
      "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

export const OurHistoryData = [
  {
    icon: "/assets/Abstract Design (6).png",
    history: "2023",
    title: "Resilience and Future Horizons",
    pgf: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    icon: "/assets/Abstract Design (6).png",
    history: "2017",
    title: "Innovation and Technology",
    pgf: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    icon: "/assets/Abstract Design (6).png",
    history: "2012",
    title: "Expansion and Recognition",
    pgf: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    icon: "/assets/Abstract Design (6).png",
    history: "2005",
    title: "Inception and Growth",
    pgf: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
];

export const SpecialCardData = [
  {
    icon: <FaBookOpen />,
    heading: "Thematic Learning",
    paragraph:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    icon: <GiLevelEndFlag />,
    heading: "Steam Education",
    paragraph:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    icon: <FaSignLanguage />,
    heading: "Language Immersion",
    paragraph:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    icon: <FaPenFancy />,
    heading: "Art and Creativity",
    paragraph:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    icon: <IoSunny />,
    heading: "Outdoor Education",
    paragraph:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    icon: <FaStar />,
    heading: "Play-Based Learning",
    paragraph:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

export const StudentsCardData = [
  {
    img: "/assets/Image (7).png",
    title: "Language Arts",
    pgf: "Reading, writing, storytelling, and communication skills.",
  },
  {
    img: "/assets/Image (8).png",
    title: "Mathematics",
    pgf: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    img: "/assets/Image (9).png",
    title: "Science",
    pgf: "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    img: "/assets/Image (10).png",
    title: "Social Studies",
    pgf: "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    img: "/assets/Image (11).png",
    title: "Arts and Crafts",
    pgf: "Encouraging creativity through various art forms and crafts.",
  },
  {
    img: "/assets/Image (12).png",
    title: "Physical Education",
    pgf: "Promoting physical fitness, coordination, and teamwork.",
  },
];

export const GalleryData = [
  {
    title: "Classrooms",
    img1: "/assets/Image (13).png",
    img2: "/assets/Image (14).png",
    img3: "/assets/Image (15).png",
    img4: "/assets/Image (16).png",
    pgf: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
  },
  {
    title: "Library",
    img1: "/assets/Image (17).png",
    img2: "/assets/Image (29).png",
    img3: "/assets/Image (30).png",
    img4: "/assets/Image (31).png",
    pgf: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
  },
  {
    title: "Science Lab",
    img1: "/assets/Image (18).png",
    img2: "/assets/Image (19).png",
    img3: "/assets/Image (20).png",
    img4: "/assets/Image (32).png",
    pgf: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
  },
  {
    title: "Computer Lab",
    img1: "/assets/Image (34).png",
    img2: "/assets/Image (35).png",
    img3: "/assets/Image (36).png",
    img4: "/assets/Image (37).png",
    pgf: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
  },
  {
    title: "Garden and Nature Area",
    img1: "/assets/Image (25).png",
    img2: "/assets/Image (26).png",
    img3: "/assets/Image (27).png",
    img4: "/assets/Image (28).png",
    pgf: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
  },
];
