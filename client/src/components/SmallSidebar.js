import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import Navlinks from "../components/Navlinks";

const SmallSidebar = () => {
  const { showSideBar, toggleSidebar, toggleSideBar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks toggleSidebar={toggleSidebar}></Navlinks>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
