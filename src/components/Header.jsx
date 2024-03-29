import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // const handleButtonClick = () => {
  // console.log("setIsButtonClicked clicked")
  //   if (isButtonClicked) {
  //     setIsButtonClicked(false);
  //   } else {
  //     setIsButtonClicked(true);
  //   }
  // };

  // const handleButtonClick = () => {
  //   // console.log("setIsButtonClicked clicked")
  //   if (isButtonClicked) {
  //     setIsButtonClicked(false);
  //   } else {
  //     setIsButtonClicked(true);
  //   }
  // };

  return (
    <>
      {/* <div id="responsive-headerdrop">
        {isButtonClicked && (
          <div className="nav-item dropdown">
            <div className="row m-1">
              <Link className="m-2 responsive-item" to="/">
                Home
              </Link>
              <Link className="m-2 responsive-item" to="/businessareas">
                Business Area
              </Link>
              <Link className="m-2 responsive-item" to="/manufacturing">
                Manufacturing
              </Link>
              <Link className="m-2 responsive-item" to="/features">
                Research &amp; Development
              </Link>
              <Link className="m-2 responsive-item" to="/about">
                About Us
              </Link>
              <Link className="m-2 responsive-item" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
      <nav className="header-alfa navbar navbar-expand-lg navbar-light d-flex">
        <div className=" header-item-flex">
          <div className="d-flex align-items-center justify-content-center">
            <Link className="navbar-brand" to="/">
              <img
                width="70"
                height="70"
                className="d-inline-block align-top"
                src="AlphallifeLogo-removebg-preview.png"
                alt="Life Link Digital" />
            </Link>

            <Link to="/" >
              <div style={{ color: "#004526", fontFamily: "monospace" }} className="logo123">AlphaLife Pharmaceuticals</div>
            </Link>

          </div>
          <div className="collapse navbar-collapse" id="">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Business Area
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/businessareas">
                    Overview
                  </Link>
                  <Link className="dropdown-item" to="/indiabranded">
                    INDIA - BRANDED GENERICS
                  </Link>
                  <Link className="dropdown-item" to="/emergingmarkets">
                    Emerging Markets - Branded Generics
                  </Link>
                  <Link className="dropdown-item" to="/usgenerics">
                    USA - GENERICS
                  </Link>
                  <Link className="dropdown-item" to="/africainstitution">
                    AFRICA-INSTITUSTION BUSINESS
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  to="/manufacturing"
                  className="nav-link"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Manufacturing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/features"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  R &amp; D
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="navbar-toggler toggle-design"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleButtonClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav> */}
      <header className="header">
        <nav>
          <div className="logo">
            <img src="AlphallifeLogo-removebg-preview.png" width="70" height="70" alt="" />
            <Link to="/" className="p-4">
              AlphaLife Pharmaceuticals

            </Link>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/businessareas">Market</Link>
            </li>
            <li>
              <Link to="/manufacturing">Processing</Link>
            </li>
            <li>
              <Link to="/features">Idea Generation</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Page</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
