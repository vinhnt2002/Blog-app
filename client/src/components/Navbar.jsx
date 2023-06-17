import React, { useContext } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?category=Art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?category=Science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?category=Technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?category=Cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?category=Design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?category=Food">
            <h6>FOOD</h6>
          </Link>

          { currentUser ? (
            <span>
              {currentUser?.user?.username.charAt(0).toUpperCase() +
                currentUser?.user?.username.slice(1)}
            </span>
          ) : ""
          }

          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
