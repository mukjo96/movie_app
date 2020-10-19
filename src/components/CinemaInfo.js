import React, {useState} from "react";
import "./CinemaInfo.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import cgv from "../res/cgv.png";
import lottecinema from "../res/lottecinema.png";
import megabox from "../res/megabox.png";
import Map from "./Map"

function CinemaInfo({
    theater_id,
    theater_name,
    theater_brand,
    location,
    location_detail,
    vote_average,
    phone,
    place_url,
    road_address_name,
    x,
    y,
    la,
    lo,
}) {

    const [distance, setDistance] = useState("-1")
    

    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
        navigator.geolocation.getCurrentPosition(function(position){
            
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
                la = lat
                lo = lon
                
                var dis = getDistanceFromLatLonInKm(la, lo, y, x)
                if(dis > 1){
                    setDistance(String(Math.floor(dis))+"k")
                }
                else{
                    setDistance(String(Math.floor(dis*1000)))
                }
                console.log(dis)
                
        });
    } else {   

    }
    
    function getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2) { 
        function deg2rad(deg) { 
            return deg * (Math.PI/180) } 
            var R = 6371; // Radius of the earth in km 
    var dLat = deg2rad(lat2-lat1); // deg2rad below 
    var dLon = deg2rad(lng2-lng1); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km 
    return d;

}


  return (
    <div
      className="cinemaInfo"
      /* style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
      }} */
    >
      <div className="bg_filter">
          {theater_brand === "CGV" ? <img
          src={cgv}
          alt={theater_brand}
          title={theater_brand}
          className="brand_logo"
        /> : null }
        {theater_brand === "롯데시네마" ? <img
          src={lottecinema}
          alt={theater_brand}
          title={theater_brand}
          className="brand_logo"
        /> : null }
        {theater_brand === "메가박스" ? <img
          src={megabox}
          alt={theater_brand}
          title={theater_brand}
          className="brand_logo"
        /> : null }
        <div className="cinemaInfo__data">
          <div className="cinemaInfo__title">
            <a>
              <h1>{theater_name}</h1>
            </a>
            <h4>{theater_brand}</h4>
          </div>
          <div className="cinemaInfo__details">
            <h5 className="cinemaInfo__address">{road_address_name}</h5>
            <h5 className="cinemaInfo__phone">{phone}</h5>
            <a href={place_url} target="_blank">지도에서 보기</a>
            <h5>
              평점 : <FontAwesomeIcon className="star" icon={faStar} />
              {vote_average} {/* ({" "}
              <FontAwesomeIcon className="people" icon={faUser} />
              {" " + vote_count} ) */}
            </h5>
            {(distance !== "-1") ? <a>{distance}m 거리에 있습니다.</a> : null}
            <div className="cinemaInfo__map">
                <Map address={road_address_name} name={theater_name} />
            </div>
            {/* <ul className="cinemaInfo__nation">
              {production_countries.map((country, index) => (
                <li key={index} className="countries__country">
                  <h5>{nationtoKR(country.name)}</h5>
                </li>
              ))}
            </ul>
          </div>

          <div className="cinemaInfo__summary">
            <p>{overview}</p>
          </div>
          <div className="cinemaInfo__production">
            <h4>제작사</h4>
            <ul className="cinemaInfo__companies">
              {production_companies.map((company, index) => (
                <li key={index} className="companies__company">
                  {toImg(company)}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
/*
Movie.propTypes = {
  rnum: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  rankInten: PropTypes.number.isRequired,
  movieCd: PropTypes.number.isRequired,
  movieNm: PropTypes.string.isRequired,
  rankOldAndNew: PropTypes.string.isRequired,
  audiAcc: PropTypes.number.isRequired,
};
*/

export default CinemaInfo;