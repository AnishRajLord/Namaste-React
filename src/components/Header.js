import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// let btnName = "Login";

const Header = () => {
  const [btnNameLogin, setBtnNameLogin] = useState("Login");
  console.log("Header render")

  //if no dependency array ==> useEffect is called on every render
  //if dependency array is empty =[] ==> useEffect is called on initial render(just once)
  // if dependency array is [btnNameLogin](means anything present inside dependency array) useEffect is called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
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