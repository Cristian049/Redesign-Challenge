import HeaderButton from "../HeaderButton/HeaderButton";
import UserInfo from "../UserInfo/UserInfo";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";
import Hamb from "../../assets/icons/Hamb";
import "./Header.css";

export default function Header({
  isDark,
  setIsDark,
  toggleSidebar,
  showToggleBtn,
}) {
  return (
    <header className="header">
      <div className="left">
        <UserInfo />
      </div>
      <ul className="right">
        <li>
          <HeaderButton
            onClick={() => setIsDark((isDark) => !isDark)}
            classname="theme"
          >
            {isDark ? <Sun /> : <Moon />}
          </HeaderButton>
        </li>
        <li>
          {showToggleBtn && (
            <HeaderButton
              className={`menuBtn ${showToggleBtn ? "visible" : ""}`}
              onClick={toggleSidebar}
            >
              <Hamb />
            </HeaderButton>
          )}
        </li>
      </ul>
    </header>
  );
}
