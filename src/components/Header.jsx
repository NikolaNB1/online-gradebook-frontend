import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav affix">
        <div className="container">
          <div className="logo">
            <Link to="/">Online gradebook</Link>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <Link href="#"></Link>
              </li>
              <li>
                <Link href="#"></Link>
              </li>
              <li>
                <Link href="#">Login</Link>
              </li>
              <li>
                <Link href="#">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
