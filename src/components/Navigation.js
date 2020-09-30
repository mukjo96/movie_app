import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import HamburgerMenu from "react-hamburger-menu";
import Searchbar from "./Searchbar.js";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

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
        <body>
          <nav className="navbar">
            <div className="navbar__logo">
              <FontAwesomeIcon className="film" icon={faPlayCircle} />
              <a>
                <Link to="/">Movie App</Link>
              </a>
            </div>
            <ul
              className={"navbar__menu" + (this.state.open ? "show" : "hidden")}
            >
              <li>
                <a>
                  <Link to="/">Now Playing</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/upcoming">Up Coming</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/toprateds">Top Rated</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/search">Search</Link>
                </a>
              </li>
              {/* <li>
                <a>
                  <Link to="/about">About</Link>
                </a>
              </li> */}
            </ul>

            <ul
              className={
                "navbar__icons" + (this.state.open ? "show" : "hidden")
              }
            >
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
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
        </body>
      </div>
    );
  }
}

export default Navigation;
