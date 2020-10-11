import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import cgv from "../res/cgv.png";
import lottecinema from "../res/lottecinema.png";
import megabox from "../res/megabox.png";
import HamburgerMenu from "react-hamburger-menu";
import logo from "../res/logo512.png";

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
              <img src={logo} />
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
                <a href="https://www.cgv.co.kr" target="_blank">
                  <img src={cgv} />
                </a>
              </li>
              <li>
                <a href="https://www.lottecinema.co.kr" target="_blank">
                  <img src={lottecinema} />
                </a>
              </li>
              <li>
                <a href="https://www.megabox.co.kr" target="_blank">
                  <img src={megabox} />
                </a>
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
