import React from "react";
import { withRouter } from "react-router-dom";
import { authService, dbService } from "../fBase";
import CinemaInfo from "../components/CinemaInfo";
import LoadingIcon from "../components/LoadingIcon";
/* import "./Detail.css";
 */
const { kakao } = window;

class Theater_Info extends React.Component {
  state = {
    cinemas: {},
    isLoading: true,
  };

  getCinemaInfos = () => {
    const { location } = this.props;
    this.setState({ cinemas: location.state, isLoading: false });
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    } else {
      this.getCinemaInfos();
    }
  }

  render() {
    const { isLoading, cinemas } = this.state;
    return (
      <div className="home">
        <body className="no-sidebar is-preload">
          <div id="page-wrapper">
            <section id="header">
              <div className="container">
                <h1 id="logo">
                  <a href="index.html">THEATER INFO</a>
                </h1>
                <p>선택하신 영화관의 상세 정보입니다.</p>
              </div>
            </section>
            <section id="main">
              {isLoading ? (
                <div id="loading-icon">
                  <LoadingIcon />
                </div>
              ) : (
                <div className="cinemainfos">
                  <CinemaInfo
                    key={cinemas.theater_id}
                    theater_name={cinemas.theater_name}
                    theater_brand={cinemas.theater_brand}
                    theater_location={cinemas.theater_location}
                    theater_location_detail={cinemas.theater_location_detail}
                    vote_average={cinemas.vote_average}
                    phone={cinemas.phone}
                    place_url={cinemas.place_url}
                    road_address_name={cinemas.road_address_name}
                    id={cinemas.id}
                    x={cinemas.x}
                    y={cinemas.y}
                    distance={cinemas.distance}
                    userObj={this.props.userObj}
                  />
                </div>
              )}
            </section>

            <section id="footer">
              <div id="copyright" className="container">
                <ul className="links">
                  <li>&copy; mukjo96. All rights reserved.</li>
                  <li>
                    Design: <a href="http://html5up.net">HTML5 UP</a>
                  </li>
                </ul>
              </div>
            </section>
            {/* <section className="container">
        {isLoading ? (
          <div id="loading-icon">
            <LoadingIcon />
          </div>
        ) : (
          <div className="cinemas">
            <CinemaInfo
              key={cinemas.theater_id}
              theater_name={cinemas.theater_name}
              theater_brand={cinemas.theater_brand}
              theater_location={cinemas.theater_location}
              theater_location_detail={cinemas.theater_location_detail}
              vote_average={cinemas.vote_average}
              phone={cinemas.phone}
              place_url={cinemas.place_url}
              road_address_name={cinemas.road_address_name}
              id={cinemas.id}
              x={cinemas.x}
              y={cinemas.y}
              distance={cinemas.distance}
              userObj={this.props.userObj}
            />
          </div>
        )}
      </section> */}
          </div>
        </body>
      </div>
    );
  }
}

export default withRouter(Theater_Info);
