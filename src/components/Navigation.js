import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import cgv from "../res/cgv.png";
import lottecinema from "../res/lottecinema.png";
import megabox from "../res/megabox.png";
import HamburgerMenu from "react-hamburger-menu";
import logo from "../res/logo512.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";

class Navigation extends React.Component {
  state = {
    isOpen: false,
    text: "",
  };
  handleClick = () => this.setState({ open: !this.state.open });
  onChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="nav">
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
            <Link to="/">Movie App</Link>
          </div>
          <ul
            className={"navbar__menu" + (this.state.open ? "show" : "hidden")}
          >
            <li>
              <Link to="/nowplaying?page=1">Now Playing</Link>
            </li>
            <li>
              <Link to="/upcoming?page=1">Up Coming</Link>
            </li>
            <li>
              <Link to="/toprateds?page=1">Top Rated</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/theaters">Theaters</Link>
            </li>
            {/*  <li>
                <a>
                  <Link to="/about">About</Link>
                </a>
              </li> */}
          </ul>

          <ul
            className={"navbar__icons" + (this.state.open ? "show" : "hidden")}
          >
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} color={"#eff3f7"} />
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} color={"#eff3f7"} />
              </Link>
            </li>
          </ul>
          <section className="navbar__toogleBtn">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              color="white"
              position="absolute"
            />
          </section>
        </nav>
      </div>
    );
  }
}

export default Navigation;
