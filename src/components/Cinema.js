import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faMapMarkerAlt,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Cinema.css";
function Cinema({
  theater_id,
  theater_name,
  theater_brand,
  theater_location,
  theater_location_detail,
  vote_average,
  phone,
  place_url,
  road_address_name,
  id,
  x,
  y,
  la,
  lo,
}) {
  const [distance, setDistance] = useState("-1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDistance();
    setIsLoading(false);
  }, []);

  const getDistance = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        la = lat;
        lo = lon;

        var dis = getDistanceFromLatLonInKm(la, lo, y, x);
        if (dis > 1) {
          setDistance(String(Math.floor(dis)) + " k");
        } else {
          setDistance(String(Math.floor(dis * 1000)) + " ");
        }
      });
    } else {
    }
  };

  function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="cinema">
          <Link
            to={{
              pathname: `/theaterinfo/${theater_id}`,
              state: {
                theater_id,
                theater_name,
                theater_brand,
                theater_location,
                theater_location_detail,
                vote_average,
                phone,
                place_url,
                road_address_name,
                id,
                x,
                y,
                distance,
              },
            }}
          >
            <div className="cinemaCard">
              {/* <div className="brand-poster">
              <div>
                <img
                  className="movieimg"
                  src={"https://image.tmdb.org/t/p/w500" + poster_path}
                  alt={title_original}
                  title={title_original}
                />
              </div>
            </div> */}
              <div className="cinema-inf">
                <div className="cinema-inf-top">
                  <div className="cinema-inf-title">{theater_name}</div>
                </div>
                <div>
                  <hr className="middle_line" />
                </div>
                <div className="cinema-inf-btm">
                  <div className="cinema-inf-overview">
                    {road_address_name}
                    <div className="phonenum">
                      <FontAwesomeIcon
                        className="mapmarker"
                        icon={faMapMarkerAlt}
                      />
                      {distance !== "-1" ? `${distance}m` : ". . ."}
                    </div>
                  </div>
                  <div className="cinema-inf-vote-avg">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    {vote_average}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cinema;
