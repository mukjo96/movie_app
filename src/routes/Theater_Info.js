import React from "react";
import CinemaInfo from "../components/CinemaInfo";
import LoadingIcon from "../components/LoadingIcon";
import "./Detail.css";

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
      <section className="container">
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
            />
          </div>
        )}
      </section>
    );
  }
}

export default Theater_Info;
