import TopNav from "./topNav/TopNav";
import MainNav from "./mainNav/MainNav";
import { GoArrowRight } from "react-icons/go";
import logo from '/assets/shape-14.svg';
import './Header.css'
const Header = () => {
  return (
    <header>
      <TopNav
        text={"Admission is Open, Grab your seat now"}
        icon={<GoArrowRight />}
      />
      <MainNav logo={logo} logoTitle={"Little learners"} />
    </header>
  );
};

export default Header;
