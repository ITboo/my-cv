import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo__text">Hanna Parfenava</span>
      </div>
      <ul className="header__menu">
        <li className="menu__item">
          <Link to="/"> ABOUT ME</Link>
        </li>
        <li className="menu__item">
          <Link to="/skills">SKILLS</Link>
        </li>
        <li className="menu__item">
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
      </ul>
      <div className="language">
        <span className="lang__item">ENG </span>
        <span className="lang__item">/ </span>
        <span className="lang__item">RUS </span>
        <span className="lang__item">/ </span>
        <span className="lang__item">KOR</span>
      </div>
    </header>
  );
}
