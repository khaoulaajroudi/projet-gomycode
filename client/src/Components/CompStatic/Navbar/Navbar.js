import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <img src="logo.PNG" alt="logo" className="logo" />
        <ul className=" nav-links">
          <li className="center">
            <Link to="/">Home</Link>
          </li>
          <li className="upward">
            <Link to="/about">About Us</Link>
          </li>
          <li className="forward">
            <Link to="/cours">Courses</Link>
          </li>
          <li className="forward">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="log">
          {!isAuth ? (
            <>
              {" "}
              <Link to="/sign">
                <button className="login slide">
                  <span>Sign In</span>
                </button>
              </Link>
              <Link to="/sign">
                {" "}
                <button className="register">
                  {" "}
                  <span>Sign Up</span>
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="">
                <button
                  className="register"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("isAdmin");
                    navigate("/");
                  }}
                >
                  <span>Logout</span>
                </button>{" "}
              </Link>
              <Link to="/profile/aboutme">
                <button className="login slide">
                  <span>Profil</span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
