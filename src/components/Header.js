import NavLinks from "./NavLinks";
import logo from "../images/logoTransparent.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Rodrigo Cabrera' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;