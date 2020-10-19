import React from "react";
import CinemaInfo from "../components/CinemaInfo"
import "./Detail.css"

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
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="cinemas">
<CinemaInfo
key = {cinemas.theater_id}
theater_name = {cinemas.theater_name}
theater_brand = {cinemas.theater_brand}
location = {cinemas.location}
location_detail = {cinemas.location_detail}
vote_average = {cinemas.vote_average}
phone = {cinemas.phone}
place_url = {cinemas.place_url}
road_address_name = {cinemas.road_address_name}
x = {cinemas.x}
y = {cinemas.y} />
          </div>
        )}
      </section>
    );
  }
}

export default Theater_Info;
