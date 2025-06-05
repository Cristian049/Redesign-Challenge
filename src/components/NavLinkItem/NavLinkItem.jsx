import "./NavLinkItem.css";
export default function NavLinkItem({ id, name, icon, disabled }) {
  return (
    <a
      key={id}
      href="#"
      className={`nav-link ${disabled ? "disabled" : ""}`}
      aria-disabled={disabled}
    >
      <span className="icon">{icon}</span>
      <span className="text">{name}</span>
    </a>
  );
}
