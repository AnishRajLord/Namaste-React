import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// let btnName = "Login";

const Header = () => {
  const [btnNameLogin, setBtnNameLogin] = useState("Login");
  console.log("Header render");

  //if no dependency array ==> useEffect is called on every render
  //if dependency array is empty =[] ==> useEffect is called on initial render(just once)
  // if dependency array is [btnNameLogin](means anything present inside dependency array) useEffect is called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameLogin === "Login"
                ? setBtnNameLogin("Logout")
                : setBtnNameLogin("Login");
            }}
          >
            {btnNameLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
