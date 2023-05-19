import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "../components/Logo";
import { useAppContext } from "../context/appContext";

const BigSidebar = () => {
  const { showSideBar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
