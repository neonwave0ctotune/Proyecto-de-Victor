import logo from "../../images/logo-mexico.jpeg"

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img alt="Magical Mexico Logo" className="header__logo" src={logo} />
        <h1>Mexico Magico</h1>
    </header>
  );
}

export default Header;