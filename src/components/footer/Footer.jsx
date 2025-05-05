import "./Footer.css";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook , FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import logo from "/assets/shape-14.svg"
const Footer = () => {
  return (
    <footer id="contact">
      <div className="footerHead">
        <div className="content">
          <div className="logo">
            <div className="imgLogo">
              <img src={logo} alt="logo" />
              <h3>Little Learners</h3>
            </div>
            <p className="myTitle">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="boxInfo">
            <div className="boxCol">
              <div className="iconContainer">
              <FaEnvelope />
              </div>
              <p>hello@littlelearners.com</p>
            </div>
            <div className="boxCol">
              <div className="iconContainer">
              <BsTelephoneFill />
              </div>
              <p>+91 91813 23 2309</p>
            </div>
            <div className="boxCol">
              <div className="iconContainer">
              <FaLocationDot />
              </div>
              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>

        <div className="lists">
          <ul className="col">
            <li className="title">Home</li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Our Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul className="col">
            <li className="title">About Us</li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Our Vission</a>
            </li>
            <li>
              <a href="#">Awards and Recognitions</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Teachers</a>
            </li>
          </ul>
          <ul className="col">
            <li className="title">Academics</li>
            <li>
              <a href="#">Special Features</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
          </ul>
          <ul className="col">
            <li className="title">Contact Us</li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Map & Direction</a>
            </li>
          </ul>
        </div>
      </div>
      <span className="Line"></span>
        <div className="EndFooter">
            <div className="pgfContainer">
                <span>Terms of Service</span>
                <span className="middleSpan">Privacy Policy</span>
                <span>Cookie Policy</span>
            </div>
            <div className="iconsContainer">
            <div className="icon">
              <a href="" title="Go to facebook"><FaFacebook /></a>
            
              </div>
              <div className="icon">
                <a href="" title="Go to twitter"><FaTwitter /></a>
               
              </div>
              <div className="icon">
                <a href="" title="Go to linkedin"><ImLinkedin /></a>
              
              </div>
            </div>
        </div>
        <span className="Line2"></span>

        <div className="copyRights">
        Copyright © [2023] Little Learners Academy. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
