import { navLinks } from "../../utils/utils.jsx";
import NavLinkItem from "../NavLinkItem/NavLinkItem.jsx";
import "./Sidebar.css";
const Sidebar = ({ isOpen, isMobile }) => {
  const sidebarClass = isMobile
    ? `sidebar ${isOpen ? "open" : ""}`
    : `sidebar ${isOpen ? "" : "closed"}`;

  return (
    <aside
      className={sidebarClass}
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <div className="logo">
        <img src="images/logo-waste.webp" alt="logo-waste" />
      </div>
      <nav className="nav">
        {navLinks.map(({ id, name, icon, disabled }) => (
          <NavLinkItem key={id} name={name} icon={icon} disabled={disabled} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
